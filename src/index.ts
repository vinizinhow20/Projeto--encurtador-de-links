import express from 'express'
import 'dotenv/config' 
import rotas from './rotas'

const app = express()

app.use(express.json())

app.use(rotas)

app.listen(process.env.PORT,() => {
    console.log(`Servidor Funcionando Na Porta ${process.env.PORT}.`)
})

