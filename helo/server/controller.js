
module.exports = {

    authenticate: (req, res, next) => {
        let {password, username} = req.body;
        console.log(req.session)
        if (req.session.authenticated){             
            next()
        }
            else if (password === process.env.PASSWORD && username === process.env.USERNAME){
                console.log('hurray?', req.session)                                     
                    req.session.authenticated = true;
                    next()
            }   
            else {
                res.sendStatus(403)       
            }    
    }
    // create: (request, response) => {
    //     const db = request.app.get('db')
    //     const {username, password} = request.body

    //     db.create_user([username, password])
    //     .then( () => response.status(200).send("all good"))
    //     .catch( (err) => {
    //         console.log(err)
    //         res.status(500).send(err)
    //     })
    // }
}