const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dbDoc = require('./data/db') 
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const path = require('path');

// load env variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

// set port
const port = process.env.PORT

// instantiate express
const app = express()

//session options

const sess_options = {    
    secret: process.env.SESSION_SECRET, 
    store: new MongoStore({url: process.env.MONGO_SESS_STORE}),
    resave: false,
    saveUninitialized: true,
    name:"session", 
    cookie: {
        httpOnly: true, 
        secure: false,  //  setup https to set to true during production
        maxAge: 1000 * 60 * 60 * 3,
        name: 'user'
    }
}

//express-session  prodcution values
if(app.get('env') == 'production'){
    app.set('trust proxy', 1)
    sess_options.cookie.secure = true
}

app.use(session(sess_options))
 
//set cors
let corsOption = {
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
};
//use cors
app.use(cors(corsOption))


// use body parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// handle routing
var router //= require('./routes/routes')(null,null,app)



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
    app.get('/*', function (req, res) {           
        res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));        
    });   
    //start server
    app.listen(port, () => {         
        console.log(`server started on port ${port}`)
        //api server started
    })

})()



