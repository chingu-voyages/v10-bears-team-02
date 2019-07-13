const express = require('express')
const router = express.Router()
const request = require('request')
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
            console.log(req.body)
            res.send({message: 'success'})
        })
      
      router.route('/api/query')
        .get((req, res) => {
          //console.log(req)
          if (true) { 
            let url = process.env.TREFLE_API + '/plants?token=' + process.env.TREFLE_KEY + '&q=' + req.body.query
            request(url, { json: true }, (err, response, body) => {
              if (err) return res.send({ error: err.toString })
              console.log(body)
              res.send(body)
            })
          } else {
            res.end()
          }
          
        })
    }
    return router
}

module.exports = routes