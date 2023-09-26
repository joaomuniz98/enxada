const Fastify = require('fastify');
const PORT = process.env.PORT || 3100;
const cors = require('fastify-cors');
const { cadastrarUsuario , loginUsuario   } = require('./controllers/authController');
const {  criarPartidaMine } = require('./controllers/mine/mineController')

const fastify = Fastify({
  logger: true,
});


fastify.register(cors, {
  // Opções de configuração CORS aqui
});
fastify.post('/login', loginUsuario);
fastify.post('/cadastro', cadastrarUsuario);
fastify.post('/mine', criarPartidaMine);


fastify.listen(PORT)
  .then((address) => console.log(`Server listening on ${address}`))
  .catch(err => {
    console.error('Error starting server:', err);
    process.exit(1);
  });
