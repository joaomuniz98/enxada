const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');
const Secret = process.env.JWT_SECRET

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
 
async function criarPartidaMine(request, reply) {

debugger  
  const { valor , qtdMine  }  = request.body

  const tokenHeader = request.headers["authorization"];

  const token = tokenHeader && tokenHeader.split(" ")[1];

  const decodedToken = jwt.verify(token, Secret);
  let userId = decodedToken.userId;
  let email  = decodedToken.email

  try {

const user = await prisma.user.findUnique({
  where: {
    email: email,
    userId: userId
  },
});

if(user.valor >= valor){

  const valorAtual = user.valor

  const valorNovo = valorAtual - valor

  const atualizacaoUsuario = await prisma.user.update({
    where: {
      userId: userId,
    },
    data: {
      valor: novoValor,
    },
  });

  console.log(`O novo valor do usuário ${userId} é: ${novoValor}`);
} else {
  console.error(`Usuário com userId ${userId} não encontrado`);
}


    const matriz = [ 
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    var  arrayPosicoes = []

    for(var i = 0; i <  qtdMine; i++){

      const linhaRamdom = getRandomInt(5)
      const colunaRamdom = getRandomInt(5)
      var valorLinhaColuna  = `[${linhaRamdom}][${colunaRamdom}]`
   
      if(arrayPosicoes.length >= 0){
        for(var j = 0; j   <  arrayPosicoes.length;j++) { 
         
          if(arrayPosicoes[j] ==  valorLinhaColuna){
           
            let valorLinhaRamdomicoNaoIgual = getRandomInt(5)
            let valorColunaRamdomicoNaoIgual = getRandomInt(5)
            valorLinhaColuna = `[${valorLinhaRamdomicoNaoIgual}][${valorColunaRamdomicoNaoIgual}]`;
            j = 0
          }
          
        }
      }
      
      const [linha, coluna] = valorLinhaColuna
      .slice(1, -1) // Remove os colchetes
      .split("][");

        const linhaInt = parseInt(linha, 10);
        const colunaInt = parseInt(coluna, 10);

      arrayPosicoes.push(valorLinhaColuna);
      matriz[linhaInt][colunaInt] =  1

     
    }

    let matrizConvertida = JSON.stringify(matriz);

    const uuid = uuidv4();

    const novoJogoDoUsuario = await prisma.mine.create({
      data: {
        userId: user.userId,
        valor: parseFloat(valor),
        qtdMine: parseInt(qtdMine),
        estado: false,
        matriz: matrizConvertida,
        idMatch: uuid,
      }
    });


   reply.send({ message: novoJogoDoUsuario });

  } catch (err) {
    console.log(err)
    reply.code(401).send({ error: err });
  }finally {
    await prisma.$disconnect();
  }
}

async function partidaAndamento(request,reply){
debugger
  const { id , idMatch  , posicao ,  } = request.body


  const tokenHeader = request.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];
  const decodedToken = jwt.verify(token, Secret);
  
  const procurarPartidaCriada = await prisma.mine.findUnique({
    where: {
      id: id,
      idMatch: idMatch,
      userId: decodedToken.userId,
      estado: false,
    },
  });

  let posicaoJsonNova =  JSON.parse(posicao)
  let posicaoJson = {};
  
  if (procurarPartidaCriada && procurarPartidaCriada.posicaoJson !== null) {
    posicaoJson =  procurarPartidaCriada.posicaoJson += posicaoJsonNova 
  } else {
    posicaoJson = JSON.parse(posicao)
  }

   let posicaoJsonString = JSON.stringify(posicaoJson);

  let matriz  = JSON.parse(procurarPartidaCriada.matriz);
  
  debugger
 
let str = posicao
str = str.replace(/'/g, '');
const posicaoArray = JSON.parse(str);

const linha = posicaoArray[0];
const coluna = posicaoArray[1];

  let resultado;
  resultado = matriz[linha][coluna];

  
debugger
 if(resultado === 1) {

  let valorMutiply =  procurarPartidaCriada.valor * 2

 const passou =  await prisma.mine.update({
    where: {
      id: procurarPartidaCriada.id,
      idMatch: idMatch,
    },
    data:{
      valor: valorMutiply,
      estado: true,
      posicaoJson: posicaoJson,
    }
  });
    reply.send({estadoGame: 1 , valorGanho: valorMutiply})

  } else {

  await prisma.mine.update({
      where: {
        id: procurarPartidaCriada.id,
        idMatch: idMatch,
      },
      data:{
        valor: 0,
        estado: false,
        posicaoJson: posicaoJsonString,
      }
    });
      reply.send({estadoGame: 0 ,valor: 0})
  }
}

module.exports = {

    criarPartidaMine,
    partidaAndamento
 
};