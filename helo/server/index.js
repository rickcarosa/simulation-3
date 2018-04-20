require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , controller = require('./controller')

    const app = express();

    const{
        CONNECTION_STRING,
        SERVER_PORT
    } = process.env;

    massive(CONNECTION_STRING).then( db => {
        app.set('db', db);
    })

    app.post('api/register', controller.create)

    // app.use(session({
    //     secret: SESSION_SECRET,
    //     resave: false,
    //     saveUninitialized: true
    // }))

//     app.use(passport.initialize());
//     app.use(passport.session());

// passport.use( new Auth0Strategy({
//     domain: DOMAIN,
//     clientID: CLIENT_ID,
//     clientSecret: CLIENT_SECRET,
//     callbackURL: CALLBACK_URL,
//     scope: 'openid profile'
// }, function(accessToken, refreshToken, extraParams, profile, done){
    
//     const db = app.get('db');
//     const {id, displayName, picture} = profile;
//     console.log(profile)
//     db.find_user([id]).then( users => {         
//         if(users[0]){                           
//             return done(null, users[0].id)      
//         } else {
//             db.create_user([displayName, picture, id]).then( createdUser => {  
//                 return done(null, createdUser[0].id)
//             })
//         }
//     })                 
// }))

    

    app.listen(SERVER_PORT, () => {console.log(`Listening on port: ${SERVER_PORT}`)});