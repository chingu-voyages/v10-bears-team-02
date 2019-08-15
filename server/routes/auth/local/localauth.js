const express   = require('express')
const router    = express.Router()
const passport  = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')



function routes(doc, app) { 
    passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'},      
        function (username, password, done) {  
            doc.findOne({ email: username }, function (err, user) {    
                if (err) { return done(err); }  
                if (!user) {                    
                    return done(null, false, {message: "No user found"});
                }
                //use bcrypt here  
                bcrypt.compare(password, user.password, (err, res)=>{
                 
                    if(err)return done(err, null)
                    if(!res)return done(null, false, {message: "Bad password"} )
 
                    return done(null, user)
                })   

               
            });
        }
    ));

    router.route('/api/local_auth/check')
        .get((req, res) => { 
            if (req.user) {
                return res.send({ auth: true })                
            }
            return res.send({ auth: false })
        })
    
    router.route('/api/local_auth/logout')
        .post((req, res) => { 
            if (req.user) {
                req.logOut()
            }
            return res.send({auth: false})

        })

      /**     
     *  sign up route
     */        
    router.route('/api/local_auth/signup')
        .post((req, res) => { //insert new user form data into db check if username exists, brcypt pw
            //check if user is in database                        
            let userCreds = req.body.userCreds          
            doc.findOne({ 'email': userCreds.email }, (err, user) => {
                //database error
               
                if (err) return res.send({error: "Database find error"})                
                //user already exists
                if(user) return res.send({error: "User email already exists"})      
                
                //salt and hash password
                bcrypt.hash(userCreds.password, 10, function(hasherr, hash){                    
                    if(hasherr) return res.send({error: 'hashing error'})
                    doc.create({                                                             
                        email: userCreds.email, // unique username   
                        nickname: userCreds.nickname,
                        password: hash                                        
                    },(docerr, result)=>{
                        if(docerr)return res.send({error: 'Database create error'})
                        return res.send({message: "Sign up successfull! Try logging in with your new username and password", result})
                        
                    }) 
                    
                })                                          
            })                            
        }

    )
    
    //authenticate user credentials route  passport.authenticate('local'), 
    router.route('/api/local_auth/login')
        .post(function (req, res) {
            passport.authenticate('local', function(err, user, info) {
                if (err) { return res.send({ error:"Authentication error", auth:false }); }
                
                if (!user) {                  
                    req.logOut()
                    return res.send({error:"Invalid credentials", auth :false});
                }

                req.logIn(user, function(err) {
                    if (err) { return res.send(err); }
                   // res.redirect('/')
                    req.user.authenticated = true;
                    res.send({ message: 'Logged in', auth: true, userData: req.user });        
                   
                });
            })(req, res);
        }
    )  


    return router

}

module.exports = routes