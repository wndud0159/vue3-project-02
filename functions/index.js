const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const axios = require('axios');
const request = require('request');
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



exports.authWithFirebase = functions.https.onRequest((req, res) => {
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
                                .createCustomToken(userRecord.uid, {provider: provider})
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


exports.authWithNaver = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        try {
            var code = req.body.code;
            var client_id = process.env.NAVER_APP_CLIENT_ID;
            var client_secret = process.env.NAVER_APP_CLIENT_SECRET;
            var state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var redirectURI = encodeURI(process.env.NAVER_REDIRECT_URI);
            var api_url = "";
            
            api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
            + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
            
            var options = {
                url: api_url,
                headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
            };
            
            await request.get(options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.status(response.statusCode).send(body);
                } else {
                  res.status(response.statusCode).send();
                  console.log('error = ' + response.statusCode);
                }
            }); 
        } catch (error) {
            functions.logger.log('functions error:', err);
            res.status(400).json(err);
        }
        
    })
})

exports.getProfileNaver = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        try {
            var token = req.body.code;
            console.log('token:', token);
            var header = "Bearer " + token;
            var api_info_url = 'https://openapi.naver.com/v1/nid/me';
            var options = {
                url: api_info_url,
                headers: {'Authorization': header}
            };
            
            request.get(options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.status(response.statusCode).send(body);
                } else {
                    console.log('error');
                    if(response != null) {
                    console.log('error = ' + response.statusCode);
                    res.status(response.statusCode).send();
                    }
                }
            });
            
        } catch (error) {
            functions.logger.log('functions error:', err);
            res.status(400).json(err);
        }
    })
})
    
