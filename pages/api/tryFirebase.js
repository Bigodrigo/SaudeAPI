import admin from '../../app/lib/firebase'

export default async function handler(req, res) {

    const payload = {
        token: "eVkOSNUeRT6zNO3fxZQzS3:APA91bFhYSdoEeHLHV_eQq2nQcQ7NGrAHJzPIuppbojQ5uDe5JTlsVfrWH9wI_nUsy2RzulZcB2XUa12uufs7PK8dyOVgGL2eVOzZ7MCBGICRqmvsD69wTEhYhWaym3Dctqjeqx_5x9m",
        notification: {
            title: 'Confia!',
            body: 'testando',
        }
    }

    const firebase = admin.messaging().send(payload)

    res.status(200)
    res.json({
        mensagem: 'Enviado'
    })

    return res
}