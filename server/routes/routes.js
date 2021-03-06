const express = require('express')
const router = express.Router()
const request = require('request')
const passport = require('passport')
const formatPlant = require('./plantObjectMod').formatPlant
const filterSortQuery = require('./helper/queryHelpers')
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
        return done(null, user.id);               
      });
      

      passport.deserializeUser(function (id, done) {   
        doc.findById(id).then((user) => { 
          //set user.authenticated manually since it defaults to false from db
          user.authenticated = true
          done(null, user)
        })
        
      });

      //add local authentication routes
      const localauth = require('./auth/local/localauth')(doc, app)
      router.use(localauth)

        router.route('/api/query')
          .post((req, res) => {                     
            let url = process.env.TREFLE_API + '/plants?token=' + process.env.TREFLE_KEY + '&q=' + req.body.query           
            request(url, { json: true }, (err, response, body) => {
              if (err) return res.send({ error: err.toString })   
              let final = filterSortQuery(body)
              res.send(final)
            })             
          })
          
        router.route('/api/plant')
          .post((req, res) => { 
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

          // get user
          router.route('/api/userData')
          .get((req,res) => {
            if(req.user){
              return res.send(req.user)
            }
            res.end()
          })

          // add queried plant to user library
          // find doc.update 
          router.route('/api/library/create')
          .post((req,res) => {
            doc.findOne({
              email:req.user.email
            }, function(err, user){
             
              let x = user.plantsLibrary.findIndex((plant)=>{
                return plant.meta.id === req.body.plant.meta.id
              })
              if(x === -1){
                doc.findOneAndUpdate({
                  email: req.user.email
                },
                {
                  $push: {
                    plantsLibrary: req.body.plant
                  }
                },
                function(err,user){               
                  return res.send({user,err})
                })
              }else{            
                //plant is already in my library             
                return res.send({err: 'already exists in library '})
              }

            })
          })

          // query
          router.route('/api/library/query')
          .post((req,res) => {
            doc.find({username: 'test2'}, function(err,q) {
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