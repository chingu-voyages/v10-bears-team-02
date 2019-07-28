const express = require('express')
const bodyParser = require('body-parser')
const dbDoc = require('./data/db')

// load env variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

// set port
const port = process.env.PORT

// instantiate express
const app = express()

// use body parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// handle routing
const router //= require('./routes/routes')(null,null,app)
//app.use(router)


(async ()=>{
    try{
        //awaiting for db or error, then enable appropritate routes. no functionality with out db
        let doc = await dbDoc()       
        router = require('./routes/routes')(null, doc, app)

    }catch(err){
        console.log(err)      
        router = require('./routes/routes')(err)
    }    
    //add routes      
    app.use(router)

    // // Handle React routing, return all requests to React app
    // app.get('/*', function(req, res) {   
    //     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    // });
    
    //start server
    app.listen(port, ()=>{
        console.log(`server started on port ${port}`)
        //api server started
    })

})()



