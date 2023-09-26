const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');
const Secret = process.env.JWT_SECRET

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
 
async function criarPartidaMine(request, reply) {
  
  const { valor , qtdMine  }  = request.body
  const tokenHeader = request.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];
  const decodedToken = jwt.verify(token, Secret);
  let userId = decodedToken.userId;

  try {

    
const user = await prisma.user.findUnique({
  where: {
    userId: userId,
  },
});


if(user){

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
    const novoJogo = await prisma.mine.create({

    data: {
      userId: userId,
      valor: parseInt(valor),
      qtdMine: parseInt(qtdMine),
      estado: false, 
      matriz: matrizConvertida,
      idMatch: uuid
    },
 
})
   reply.send({ message: novoJogo });
   debugger
  } catch (err) {
    console.log(err)
    reply.code(401).send({ error: err });
  }finally {
    await prisma.$disconnect();
  }
}

async function partidaAndamento(request,reply){
 
const { idMatch , userId , posicao } = request.body


const  procurarPartidaCriada = await prisma.mine.findUnique({
  where: {
    idMatch: idMatch,
    userId: userId,
    estado: false,
  },
});

       
let matriz  = procurarPartidaCriada.matriz
let posicaoSeleciona = posicao

let linha = posicaoSeleciona[0]
let coluna =  posicaoSeleciona[1]

let resultado 

 resultado = matriz[linha][coluna]

 if(resultado === 1){
    reply.send({estadoGame: 1})
 } else{
    reply.send({estadoGame: 0})
 }
}


module.exports = {

    criarPartidaMine,
 
};