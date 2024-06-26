import { Request,Response } from "express";
import { ContarVisitas, lerDados } from "../utilitarios/arquivos";
export default class ObterLink {
    async controlador(req:Request, res:Response){
        const {identificador} = req.params

        const bancodedados = await lerDados()

        const existeLink = bancodedados.find( link => {
            return link.identificador === identificador
        })

        if (!existeLink) {
            return res.status(404).json({
                mensagem: 'O link não existe.'
            })
        }

        await ContarVisitas(existeLink.identificador)

        return res.json({
            url: existeLink.url
        })
    }

}