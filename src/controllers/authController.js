// controllers/authController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Secret = process.env.JWT_SECRET

async function cadastrarUsuario(request, reply) {

  const {  email, senha } = request.body;


  try {


    const usuarioExistente = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (usuarioExistente) {
      reply.status(400).send({ message: 'Este e-mail já está em uso.' });
      return;
    }
    const hashedPassword = await bcrypt.hash(senha, 10);



    const novoUsuario = await prisma.user.create({
      data: {
        email: email, 
        senha: hashedPassword, 
      },
    });

   

    reply.send({ message: 'Cadastro bem-sucedido', usuario: novoUsuario});
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    reply.status(500).send({ message: 'Erro interno ao cadastrar usuário.' });
  } finally {
    await prisma.$disconnect();
  }
}

async function loginUsuario(request,reply){

  try {
    
    const { email , senha } = request.body;

    const usuario =  await prisma.user.findUnique({
        where:{
          email: email,
        },
    })

    if(!usuario){
      reply.status(400).send({message: 'Credencias incorretas.',sucesso: 0});
      return;
    }

    if(email !== usuario.email){
      reply.status(400).send({message: 'Email ou senha incorretos.',sucesso: 0});
      return;
    }

    console.log(senha)
    const isPasswordValid = await bcrypt.compareSync(senha, usuario.senha);

    if (!isPasswordValid) {
      return reply.status(401).send({ error: 'Senha incorreta' });
    }

    const token = jwt.sign({email: usuario.email , userId: usuario.userId}, Secret) 

    reply.send({message: 'Sucesso login',usuario: usuario,sucesso: 1, token: token})

  } catch (error) {
    
    console.error('Erro ao realizar login:', error);
    reply.status(500).send({ message: 'Err0o interno ao realizar login.' });
  }

}

async function verificarToken  (request,reply,next) {

  const tokenHeader = request.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];

  if(!token){

    reply.status(401).send({message: "Não autorizado"})
  }

  try {

    const decodedToken = jwt.verify(token, Secret);
    request.userId = decodedToken.userId;
    next();
    
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    reply.status(500).send({ message: 'Erro interno ao realizar login.' });
  }

}


module.exports = {
  cadastrarUsuario,
  loginUsuario,
  verificarToken,
  
};
