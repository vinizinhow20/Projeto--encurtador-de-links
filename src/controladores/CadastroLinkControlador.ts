import { Request, Response } from "express";
import { lerDados, adicionarDados} from "../utilitarios/arquivos";
import Link from "../modelos/Link";

export default class CadastroLink{
    async controlador(req:Request, Res:Response) {
        const { url, identificador} = req.body

        if(!url || !identificador){
            return Res.status(400).json({
                mensagem: 'A url e o identificador são obrigatórios'
            })
        }

        const bancodedados = await lerDados()

        const existeLink = bancodedados.find( link => {
            return link.identificador === identificador
        })

        if (existeLink) {
            return Res.status(400).json({
                mensagem: 'O link já existe.'
            })
        }

        const novoLink = new Link(identificador,url)

        await adicionarDados(novoLink)

        return Res.status(201).json(novoLink)
    }

}