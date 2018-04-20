require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , controller = require('./controller')
    , bodyParser = require('body-parser')

    const app = express();
    app.use(bodyParser.json());

    const{
        CONNECTION_STRING,
        SERVER_PORT,
        SESSION_SECRET
    } = process.env;

    massive(CONNECTION_STRING).then( db => {
        app.set('db', db);
    })

    app.use(session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }))

    // app.use(passport.initialize());
    // app.use(passport.session());

    app.use((req, res, next) => {
        console.log("I've been hit!!!")
        next()
    }) 
    
    app.get('/api/please', (req, res) => {
        res.status(200).send({data: 'YES!'})
    })
    
    app.post('/api/again', controller.authenticate, (req, res) => {
        res.status(200).send({message: 'it works again!!'})
    })



    

    app.listen(SERVER_PORT, () => {console.log(`Listening on port: ${SERVER_PORT}`)});