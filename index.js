const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const db = require("./dbconfig")
//const estudianteController = require('./controllers/estudiante.controller')
const usuarioController = require('./controllers/usuario.controller')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

db.connect((err)=>{
    if (err){
        console.log(err)
    } 
    console.log("conectado a base de datos..")
})

app.get('/', (req,res)=>res.send("APIREST loly en tiempos de covid"))

//app.use('/api', estudianteController)
app.use('/api', usuarioController)


app.listen(process.env.PORT || 3000, () => console.log("runing..."))