const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')

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


    debugger
    const novoJogo = await prisma.mine.create({

    data: {

      userId: userId,
      valor: parseInt(valor),
      qtdMine: parseInt(qtdMine),
      estado: true, 
      matriz: matrizConvertida,
      idMatch: "ulalasd"
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


module.exports = {

    criarPartidaMine,
 
};