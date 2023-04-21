var push = require('web-push')

let vapIdKeys = {
    publicKey: 'BMcyeHj9o6fqIyW14Cyiy-yWqZ3dyvwRN82fT7vr9lcIoKFx6RaQ-gG1qejnKusLU-bnObHm4ti29mcstBKGkLA',
    privateKey: '8S_nHKYtCnmc1bGrBYHqCmtSOXAvFhc5J3982WXJW3k'
}

push.setVapidDetails('https://www.google.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/clSGdqMU_-w:APA91bFOxbE1UdZ5kQxP0vtYsxk6It-r3OgMPk7GzUQkLYy151ohlQmtEGV9srBsnSR7sDnYoZGWudVa8WiYmucYkw9yIp2Wc79RXbSikQ7zYxDHuRzJXHSLitqGsazQa_TMm4-meL9G","expirationTime":null,"keys":{"p256dh":"BGXMOps4z0gY-iOaZsEoSka27V-r_TEKmgg1dXz3n1G7HADedz627JBx9LxA3-pYG4zwVJ1DF2YkSTMFkoGRxTA","auth":"nxbzOwtUPSDJDuEBtJra9Q"}}

push.sendNotification(sub, 'test message')