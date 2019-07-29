const express = require('express')
const router = express.Router()
const request = require('request')
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
        router.route('/api/test')
        .get((req, res) => {        
            console.log(req)
            res.send({message: 'success'})
        })
      
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

          router.route('/api/library/create')
          .post((req, res) => {
            doc.create({email: 'test@123.com', username: 'test2'},function(err, userdata) {
              console.log(userdata)
              res.send(userdata)
            })
          })

          router.route('/api/library/query')
          .post((req,res) => {
            doc.find({username: 'test2'}, function(err,q) {
              console.log(q)
              res.send(q)
            })
          })

          router.route('/api/library/destroy')
          .post((req,res) => {
            doc.deleteOne({username: 'test2'}, function(err,userData){
              res.send(userData)
            })
          })

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