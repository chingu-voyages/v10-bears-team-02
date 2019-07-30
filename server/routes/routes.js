const express = require('express')
const router = express.Router()
const request = require('request')
const passport = require('passport')
const formatPlant = require('./plantObjectMod').formatPlant
//const passport = require('passport')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

// test connection to database
function routes(err,db,app){
    if(err){
        // err is databse conenction err, no user functionality, declare routes accordingly. (remove user authorized routes)
    } else {
        // add passport stuff here
      app.use(passport.initialize())
      app.use(passport.session())


      
      passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });



      
      router.route('/api/query')
        .post((req, res) => {                     
          let url = process.env.TREFLE_API + '/plants?token=' + process.env.TREFLE_KEY + '&q=' + req.body.query           
          request(url, { json: true }, (err, response, body) => {
            if (err) return res.send({ error: err.toString })          
            res.send(body)
          })             
        })
        
      router.route('/api/plant')
        .post((req, res) => { 
          //console.log(req.body)
          let url = process.env.TREFLE_API + '/plants/' + req.body.id + '?token=' + process.env.TREFLE_KEY 
          request(url, { json: true }, (err, response, body) => {
            
            //Fix body to reflect final state to push to store.  choose final 
            if (err) return res.send({ error: err.toString })          
            res.send(formatPlant(body))
          })     

        })
      
    }
    return router
}

module.exports = routes