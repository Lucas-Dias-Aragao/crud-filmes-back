const app = require('./src/app.js');
const cors = require('cors');

const PORT = 3000;

// Configurar CORS
const corsOptions = {
  origin: 'http://localhost:8002',
  methods: 'GET,POST,PUT,DELETE',
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



