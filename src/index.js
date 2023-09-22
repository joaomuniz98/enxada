const Fastify = require('fastify');
const { PrismaClient } = require('@prisma/client');

const PORT = process.env.PORT || 3100;
const { cadastrarUsuario , loginUsuario , verificarToken  } = require('./controllers/authController');
const { verificarTokenMine , criarPartidaMine } = require('./controllers/mine/mineController')

const fastify = Fastify({
  logger: true,
});

fastify.register(require('fastify-mysql'), {
  connectionString: 'mysql://root:admin@localhost:3306/enxada',
});

fastify.post('/login', loginUsuario);
fastify.post('/cadastro', cadastrarUsuario);
fastify.post('/mine', {
  preHandler: verificarTokenMine,
}, criarPartidaMine);


fastify.listen(PORT)
  .then((address) => console.log(`Server listening on ${address}`))
  .catch(err => {
    console.error('Error starting server:', err);
    process.exit(1);
  });
