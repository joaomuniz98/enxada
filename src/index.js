const Fastify = require('fastify');
const { PrismaClient } = require('@prisma/client');

const PORT = process.env.PORT || 3000;
const { cadastrarUsuario , loginUsuario } = require('./controllers/authController');

const fastify = Fastify({
  logger: true,
});

fastify.register(require('fastify-mysql'), {
  connectionString: 'mysql://root:jjvv1998jj@localhost:3306/enxada',
});

fastify.post('/login', loginUsuario);
fastify.post('/cadastro', cadastrarUsuario);



fastify.listen(PORT)
  .then((address) => console.log(`Server listening on ${address}`))
  .catch(err => {
    console.error('Error starting server:', err);
    process.exit(1);
  });
