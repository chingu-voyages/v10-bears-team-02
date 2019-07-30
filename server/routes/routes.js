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
function routes(err,doc,app){
    if(err){
        // err is databse conenction err, no user functionality, declare routes accordingly. (remove user authorized routes)
    } else {
        // add passport stuff here
      app.use(passport.initialize())
      app.use(passport.session())



      passport.serializeUser(function (user, done) {
        console.log('third')
        done(null, user.id);
      });
      

      passport.deserializeUser(function (id, done) {
        console.log('fourth')
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });

      //add local authentication routes
      const localauth = require('./auth/local/localauth')(doc, app)
      router.use(localauth)

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

          // create user
          router.route('/api/users/create')
          .post((req,res) => {
            doc.create({
              email: 'test email',
              username: 'test username',
              plantsLibrary: [],
              authenticated: false,
              currentPlant: {
                  name: 'a plant',
                  perennial: 'maybe'
              }
            },function(err,user){
            res.send({user,err})
            })
          })

          // create
          router.route('/api/library/create')
          .post((req, res) => {
            doc.create({},function(err,user){
              res.send(user)
            })
            // doc.create({email: 'test@123.com', username: 'test3'},function(err, userdata) {
            //   console.log(userdata)
            //   res.send(userdata)
            // })
          })

          // query
          router.route('/api/library/query')
          .post((req,res) => {
            doc.find({username: 'test2'}, function(err,q) {
              console.log(q)
              res.send(q)
            })
          })

          // destroy
          router.route('/api/library/destroy')
          .post((req,res) => {
            doc.deleteOne({username: 'test2'}, function(err,userData){
              res.send(userData)
            })
          })

          // queryAll
          router.route('/api/library')
          .post((req,res) => {
            doc.find(function(err,entries) {
              res.send(entries)
            })
          })

      
    }
    return router
}

module.exports = routes