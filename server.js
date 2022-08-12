const express = require('express')
const app = express()



// routes
const Router = require('./routes/routes')

// middlewares
app.use(express.json()) // cuando envien desde el cliente un archivo en json, el sv es capaz de entenderlo
app.use(Router)


app.get('/', (req,res) => res.send('Servidor funcionando'))

app.listen(4000, () => console.log('servidor corriendo en el puerto 4000'))