const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')

const Secret = process.env.JWT_SECRET


async function verificarTokenMine(request, reply, next) {
  const { valor, qtdMine } = request.body;
  const tokenHeader = request.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];

  if (!token) {
    reply.status(401).send({ message: "Não autorizado" });
    return;
  }

  try {
    const decodedToken = jwt.verify(token, Secret);
    request.userId = decodedToken.userId;
    request.qtdMine = qtdMine;
    request.valor = valor;
    next();
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    reply.status(401).send({ message: 'Token inválido' });
  }
}



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
 
async function criarPartidaMine(request, reply) {
  
  try {

    const qtdMine = request.qtdMine;

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

    let userId = request.userId;
    let valor = parseInt(request.valor);
   
    let matrizConvertida = JSON.stringify(matriz);

    const novoJogo = await prisma.mine.create({
      data: {
        userId: userId,
        valor: valor,
        qtdMine: parseInt(qtdMine),
        estado: true,
        matriz: matrizConvertida,
        idMatch: "ulalasd"
      },
    });
    
    reply.status(200).send({ message: novoJogo });
  } catch (err) {
  
    reply.code(401).send({ error: err });
  }
}


module.exports = {

    criarPartidaMine,
    verificarTokenMine
}