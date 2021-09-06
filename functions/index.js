const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

const privateKey = (process.env.FIREBASE_ADMIN_PRIVATE_KEY || "").split("\\n").join("\n");
const serviceAccount = {
    "type": process.env.FIREBASE_ADMIN_TYPE,
    "project_id": process.env.FIREBASE_ADMIN_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
    "private_key": privateKey,
    "client_email": process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_ADMIN_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_ADMIN_AUTH_URI,
    "token_uri": process.env.FIREBASE_ADMIN_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_ADMIN_AUTH_PROVIDER_CERT_URL,
    "client_x509_cert_url": process.env.FIREBASE_ADMIN_CLIENT_CERT_URL
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})


const clientId = 'rv83noxglp';
const clientSecret = 'NlFJB8UMtilrJ1G05TD9PBxENOXQMueV6r1Pizwn';
const language = 'Kor';
exports.apiSpeechToText = functions.https.onRequest((req, res) => {
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

exports.authWithKakao = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        const userId = JSON.stringify(req.body.userId);
        const displayName = JSON.stringify(req.body.nickname);
        const provider = JSON.stringify(req.body.provider);
        console.log('userId check : ', JSON.stringify(userId));
        console.log("userInfo ckecked : ", req.body);
        try {
            admin.auth().getUser(userId)
                .then((response) => {
                    console.log('기존 유저');
                    admin.auth()
                        .createCustomToken(userId, {provider: provider})
                        .then((customToken) => {
                            res.status(200).json(customToken);
                        })
                        .catch((error) => {
                            console.log('Error creating custom token:', error);
                        });
                    }).catch((error) => {
                    console.log('신규 유저');
                    admin.auth()
                        .createUser({
                            uid: userId,
                            displayName: displayName,
                            provider: provider,
                        })
                        .then((userRecord) => {
                            console.log('Successfully created new user:', userRecord.uid);
                            admin.auth()
                                .createCustomToken(userRecord.uid, {provider: 'KAKAO'})
                                .then((customToken) => {
                                    res.status(201).json(customToken);
                                })
                                .catch((error) => {
                                    console.log('Error creating custom token:', error);
                                });

                        })
                        .catch((error) => {
                            console.log('Error creating new user:', error);
                        });
                    
                })
        } catch(err) {
            functions.logger.log('functions error:', err);
            res.status(400).json(err);
        }
    });
});


