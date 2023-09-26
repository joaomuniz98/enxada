const Fastify = require('fastify');
const PORT = process.env.PORT || 3100;
const { cadastrarUsuario , loginUsuario   } = require('./controllers/authController');
const {  criarPartidaMine, partidaAndamento } = require('./controllers/mine/mineController')
const fastify = Fastify({
  logger: true,
});

fastify.register(require('fastify-cors'), { 
  // put your options here
})


fastify.post('/login', loginUsuario);
fastify.post('/cadastro', cadastrarUsuario);
fastify.post('/mine', criarPartidaMine);
fastify.post('/mine/jogar',partidaAndamento)


fastify.listen(PORT)
  .then((address) => console.log(`Server listening on ${address}`))
  .catch(err => {
    console.error('Error starting server:', err);
    process.exit(1);
  });
