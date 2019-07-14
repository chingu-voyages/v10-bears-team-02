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
            console.log(req)
            res.send({message: 'success'})
        })


        //Trefle search query api end point
        router.route('/api/query')
            .post((req, res) => {    
                console.log(req.body)
                res.send(req.body)
        })
    }
    return router
}

module.exports = routes