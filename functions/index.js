const functions = require("firebase-functions");
const cors = require('cors')({ origin: true });
const fs = require('fs');
const axios = require('axios');

const clientId = 'rv83noxglp';
const clientSecret = 'NlFJB8UMtilrJ1G05TD9PBxENOXQMueV6r1Pizwn';
const language = 'Kor';


exports.apiSTT3 = functions.https.onRequest((req, res) => {
    return cors(req, res, async ()  => {
        try {
            const response = await axios.post(`https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=${language}`, req.body, {
                headers: {
                'Content-Type': 'application/octet-stream',
                'X-NCP-APIGW-API-KEY-ID': clientId,
                'X-NCP-APIGW-API-KEY': clientSecret,
                },
            })
            res.status(response.status).json(response.data);
        } catch (err) {
            functions.logger.log('functions error:', err);
            res.status(400).json(err);
        }
    });
});
