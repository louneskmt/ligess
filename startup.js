const { LND } = require('./backend')

require('dotenv').config()

const startup = () => {
    const requiredKeys = ['LIGESS_USERNAME', 'LIGESS_DOMAIN', 'LIGESS_LN_BACKEND']

    checkKeys(requiredKeys)

    const backend = process.env.LIGESS_LN_BACKEND

    switch (backend) {
        case LND:
            _lndCheck()
            break;
    }

}

const _lndCheck = () => {
    const requiredKeys = ['LIGESS_LND_REST', 'LIGESS_LND_MACAROON']
    checkKeys(requiredKeys)
}

const checkKeys = (keys) => {
    for (const key of keys) {
        if (!process.env[key]) {
            console.error(`Env variable ${key} is not defined`)
            process.exit(1)
        }
    }
}

module.exports = { startup }