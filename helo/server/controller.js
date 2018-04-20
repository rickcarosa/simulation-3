const axios = require('axios');


module.exports = {

    create: (request, response) => {
        const db = request.app.get('db')
        const {username, password} = request.body

        db.create_user([username, password])
        .then( () => response.status(200).send("all good"))
        .catch( (err) => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}