const express = require('express')
const app = express()



// routes
const Router = require('./routes/routes')

// middlewares
app.use(express.json())
app.use(Router)


app.get('/', (req,res) => res.send('Servidor funcionando'))

app.listen(4000, () => console.log('servidor corriendo en el puerto 4000'))