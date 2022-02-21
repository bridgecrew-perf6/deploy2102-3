//carregar o módulo express
const express = require('express')

//executar o express
const app = express()

//definir a porta do servidor
const porta = process.env.PORT || 3535

//carregar o consign e configurá-lo
const consign = require('consign')
consign().include('./routes').into(app)

//definir a pasta dos assests (css, images,etc)
app.use(express.static('./assets/'))

//definir uma pasta diferente da views para armazenar os conteúdos
//app.set('views', '[nome da pasta]')

//exportar as variáveis app e porta
module.exports = {app,porta}