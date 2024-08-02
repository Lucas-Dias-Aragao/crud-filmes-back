const app = require('./src/app.js'); //tem express e routes
const cors = require('cors');

const PORT = 3000;
//daqui pra cima

//daqui pra baixo
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

