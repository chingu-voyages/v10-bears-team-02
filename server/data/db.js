const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const database =  null
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

//returns a promise resolving to a database object
function connect(){

    return new Promise((resolve, reject)=>{    
      
        if(database){
            //already connected to db       
            resolve(database)        
           
       }else{
           mongoose.connect(process.env.MONGO_ATLAS_URI, {useNewUrlParser: true, useFindAndModify: false,  dbName: 'GardenGuru'}).then(()=>{
               //mongoose connect resolves to undefined set db manually
                let userSchema = new Schema({
                    email: String, //unique name works as indentifier
                    nickname: String, // personal name not unique
                    plantsLibrary: {
                        type: Array,
                        default: []
                    },
                   currentPlant: {
                        type: Map,
                        of: String,
                        default: {}
                    },
                    authenticated: {
                        type: Boolean,
                        default: false
                    }, 
                    password: String //  don't send this back to client

                })
                let doc = mongoose.model('User', userSchema, 'Users')                    
               resolve(doc)
               
           },(err)=>{
               reject(err)
            })           
        }
       
    })
    
}

module.exports = connect