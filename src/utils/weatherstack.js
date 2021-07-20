const request = require('postman-request')

const weatherstack = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=16f0b6169578f8b390cfcb78399b22aa&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const temp = body.current.temperature
            const feelsLike = body.current.feelslike
            const weather = body.current.weather_descriptions[0]

            callback(undefined, {
                temp,
                feelsLike,
                weather
            })
        }
    })
}

module.exports = weatherstack