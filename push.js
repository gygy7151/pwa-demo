var push = require('web-push')

const keys = push.generateVAPIDKeys();

let vapIdKeys = {
    publicKey: 'BD6Y5yIe1LF9VdWqkbvwZny7Y-eScTmHEokauEKektdv6FAzEkUmx8iVOlERTcF_yIWX5y7FZwEBeg-U3o74NPc',
    privateKey: 'sc5t5HCgHtFXhWPaTHjsntWntNo3vlLeS6tp5TvwzMA'
  }

  
push.setVapidDetails('mailto:test@code.co.uk', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')