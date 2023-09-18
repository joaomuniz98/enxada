const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



async function criarPartidaMine(request, reply) {
  console.log("Entrou no mine");
  try {
    const userId = request.userId;


    reply.send(userId);
  } catch (err) {
    reply.code(401).send({ error: 'Unauthorized' });
  }
}


module.exports = {

    criarPartidaMine
}