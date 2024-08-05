// const app = require('./src/app.js'); //tem express e routes
// const cors = require('cors');

// const PORT = 3000;
// //daqui pra cima

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// //daqui pra baixo
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`)
// })

const app = require('./src/app.js');
const cors = require('cors');

const PORT = 3000;

// Configurar CORS
const corsOptions = {
  //origin: 'http://127.0.0.1:5500', // Substitua pelo domínio do seu front-end
  origin: 'http://localhost:8002',
  methods: 'GET,POST,PUT,DELETE',
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



