const express   = require('express')
const router    = express.Router()
const passport  = require('passport')
const LocalStrategy = require('passport-local').Strategy



function routes(doc, app) { 
    passport.use(new LocalStrategy(
        function (username, password, done) {
            console.log('localstrat')
          doc.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            //use bcrypt here  
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        }
    ));

      /**     
     *  sign up route
     */        
    router.route('/api/local_auth/signup')
        .post((req, res) => { //insert new user form data into db check if username exists, brcypt pw
            //check if user is in database            
            
            /**
             * Fix doc.findOne user.username.
             * Query should search database for email not username and query correct properties
             *               
             */

            let userCreds = req.body.userCreds
          
            doc.findOne({ 'email': userCreds.email }, (err, user) => {
                //database error
               
                if (err) return res.send({ errors: [{ msg: err }] })                
                //user already exists
                if(user) return res.send({errors: [{msg:"User already exists try logging in"}]})      
                
                //salt and hash password
                // bcrypt.hash(req.body.password, 10, function(hasherr, hash){                    
                //     if(hasherr) return res.send({errors: [{ msg: 'hashing error'}]})

                    
                // })  
                

                //should salt and hash password above
                console.log(userCreds)
                doc.create({                                                             
                    email: userCreds.email, // unique username   
                    nickname: userCreds.nickname,
                    password: userCreds.password                                          
                },(docerr, result)=>{
                    if(docerr)return res.send({errors:[{msg:docerr}]})
                    return res.send({message: "Sign up successfull! Try logging in with your new username and password", result})
                    
                }) 

            })                            
        }

    )
    
    //authenticate user credentials route
    router.route('/api/local_auth/login')
        .post(passport.authenticate('local'), function(req, res){
            console.log('passed local strategy')
            if(req.user){
                console.log('user is:', req.user)
                return res.send(true)
            }
            return res.send(false)
        }
    )  


    return router

}

module.exports = routes