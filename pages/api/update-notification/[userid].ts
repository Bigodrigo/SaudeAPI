//import db from '../../../utils/db'
import db from '../utils'
import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('Executando a API...')
    let messageid = req.body.messageid
    let userid = req.body.userid
    let resposta = req.body.resposta
    let recebidoEm = new Date().toLocaleString()
    console.log('MID: ' + messageid + 'UID: ' + userid + 'resposta: ' + resposta + 'recebidoEm: ' + recebidoEm)
    try {
        if (req.method === 'PUT') {
            await db.collection('users')
                .doc(userid as string)
                .collection('Mensagens')
                .doc(messageid as string)
                .update({
                    resposta: resposta,
                    recebidoEm: recebidoEm
                })
        }
        res.status(200).end()
        console.log('Banco de dados atualizado com sucesso!')
    } catch (e) {
        console.error('Erro ao tentar atualizar os dados!')
        console.log(e)
        res.status(400).end()
    }
}