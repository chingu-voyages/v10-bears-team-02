const express = require('express')
const router = express.Router()
//const passport = require('passport')

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
    }
    return router
}

module.exports = routes