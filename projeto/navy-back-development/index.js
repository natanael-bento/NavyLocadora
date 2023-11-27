const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//rotas
const usuarioController = require('./controllers/usuarioController');
const localizacaoController = require('./controllers/localizacaoController');

app.use(express.json());
app.use('/usuario', usuarioController);
app.use('/localizacao', localizacaoController);