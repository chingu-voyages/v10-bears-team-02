const express = require('express')
const router = express.Router()
const request = require('request')
const formatPlant = require('./plantObjectMod').formatPlant
//const passport = require('passport')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

// test connection to database
function routes(err,db,app){
    if(err){
        // handle error
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
      
    }
    return router
}

module.exports = routes