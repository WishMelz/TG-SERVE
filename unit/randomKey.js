const md5 = require('md5')
const { md5_key } = require('../config')

function randomKey() {
    let num = Math.random() * 10 + 1;
    let thisTime = String(Date.now()).substring(7);
    let SCKEY = md5(thisTime + md5_key)
    for (var i = 0; i <= num; i++) {
        SCKEY = md5(SCKEY)
    }
    return 'SK' + SCKEY;
}

// randomKey()
module.exports = randomKey;
