import express from 'express'
import 'dotenv/config' 
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json("Tudo Certo.")
})

app.listen(process.env.PORT,() => {
    console.log(`Servidor Funcionando Na Porta ${process.env.PORT}.`)
})

