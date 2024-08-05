// const express = require('express');
// const routes = require('./routes');

// const app = express();
// routes(app);


// module.exports = app;

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Configurar CORS
const corsOptions = {
  //origin: 'http://127.0.0.1:5500', // Substitua pelo domínio do seu front-end
  origin: 'http://localhost:8002',
  methods: 'GET,POST,PUT,DELETE',
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json()); // Para habilitar o parsing de JSON nas requisições

routes(app);

module.exports = app;
