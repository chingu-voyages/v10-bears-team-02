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
           mongoose.connect(process.env.MONGO_ATLAS_URI, {useNewUrlParser: true, dbName: 'GardenGuru'}).then(()=>{
               //mongoose connect resolves to undefined set db manually
                console.log('new db resolved')
                let userSchema = new Schema({
                    email: String,
                    username: String,
                    plantsLibrary: Array,
                    authenticated: Boolean,
                    currentPlant: {
                        type: Map,
                        of: String
                    }
                })
                let doc = mongoose.model('User', userSchema, 'Users')                    
               resolve(doc)
               
           },(err)=>{
               console.log('Database error:' + err)
               reject(err)
            })           
        }
       
    })
    
}

module.exports = connect