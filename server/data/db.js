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
            console.log('have db')
            resolve(database)        
           
       }else{
           console.log('connecting db')
           mongoose.connect(process.env.MONGO_ATLAS_URI, {useNewUrlParser: true}).then(()=>{
               //mongoose connect resolves to undefined set db manually
                console.log('new db resolved')
                let userSchema = new Schema({
                    email: String,
                    username: String,
                    plantsLibrary: Array,
                    currentPlant: {
                        name: String,
                        perennial: String
                    },
                    authenticated: Boolean
                })
                let doc = mongoose.model('User', userSchema)                    
               resolve(doc)
               
           },(err)=>{
               console.log('Database error:' + err)
               reject(err)
            })           
        }
       
    })
    
}

module.exports = connect