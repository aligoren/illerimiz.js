'use strict'

const iller = require('./iller')

const illerimiz = () => {
    return {
        get: (data) => {
            if(data) {
                const key = Object.keys(data)[0]
                return iller.filter(f => f[key] == data[key])[0]
            }
            return iller
        }
    }
}

module.exports = illerimiz;