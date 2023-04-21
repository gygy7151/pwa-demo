var push = require('web-push')

let vapIdKeys = {
    publicKey: 'BMcyeHj9o6fqIyW14Cyiy-yWqZ3dyvwRN82fT7vr9lcIoKFx6RaQ-gG1qejnKusLU-bnObHm4ti29mcstBKGkLA',
    privateKey: '8S_nHKYtCnmc1bGrBYHqCmtSOXAvFhc5J3982WXJW3k'
}

push.setVapidDetails('welcome IOS push notification!', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')