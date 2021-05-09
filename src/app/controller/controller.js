const api = require('../../service/api')

class SessionController {
    async findAll(req, res, next) {
        let cont = 0
        let resultApi = []
        const result = await api

        for (let i = 0; i < result.data.length; i++) {

            if (result.data[i].language === process.env.LANGUAGE || 'C#') {
                if (cont < 5) {

                    resultApi[i] = {
                        linguagem: result.data[i].language,
                        tituloCard: result.data[i].name,
                        subTituloCard: result.data[i].description,
                        imagemCard: result.data[i].owner.avatar_url,
                        created_at: result.data[i].created_at,
                        updated_at: result.data[i].updated_at

                    }
                    cont++
                }
            }

        }

        resultApi = Object.assign({}, resultApi);

        if (resultApi) {
            return res.status(200).send(resultApi)
        } else {
            return res.status(400).send({ Error: "Não foi possível encontrar os repositórios solicitados" })
        }
    }
}

module.exports = new SessionController()