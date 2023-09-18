const Fastify = require('fastify');
const { PrismaClient } = require('@prisma/client');

const PORT = process.env.PORT || 3000;
const { cadastrarUsuario , loginUsuario , verificarToken ,passouToken } = require('./controllers/authController');
const { criarPartidaMine } = require('./controllers/mine/mineController')

const fastify = Fastify({
  logger: true,
});

fastify.register(require('fastify-mysql'), {
  connectionString: 'mysql://root:admin@localhost:3306/enxada',
});

fastify.post('/login', loginUsuario);
fastify.post('/cadastro', cadastrarUsuario);
fastify.post('/mine', {
  preHandler: verificarToken,
}, criarPartidaMine);


fastify.listen(PORT)
  .then((address) => console.log(`Server listening on ${address}`))
  .catch(err => {
    console.error('Error starting server:', err);
    process.exit(1);
  });
