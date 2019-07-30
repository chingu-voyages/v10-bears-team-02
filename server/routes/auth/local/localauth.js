const express   = require('express')
const router    = express.Router()
const passport  = require('passport')
const LocalStrategy = require('passport-local').Strategy



function routes(doc, app) { 
    passport.use(new LocalStrategy(
        function(username, password, done) {
          doc.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        }
      ));

}