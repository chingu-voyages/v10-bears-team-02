const express   = require('express')
const router    = express.Router()
const passport  = require('passport')
const LocalStrategy = require('passport-local').Strategy



function routes(doc, app) { 
    passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'},      
        function (username, password, done) {  
            doc.findOne({ email: username }, function (err, user) {                 
                if (!user) {                    
                    return done(null, false, {message: "No user found"});
                }
                //use bcrypt here  
                if (user.password !== password) {                               
                    return done(null, false, {message: "Bad password"});
                }
                if (err) { return done(err); }   
                
                return done(null, user);
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
                console.log(req.cookie)
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
               
                if (err) return res.send({ errors: [{ msg: err }]})                
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
    
    //authenticate user credentials route  passport.authenticate('local'), 
    router.route('/api/local_auth/login')
        .post(function (req, res) {
            console.log({"cookie": req.cookies})
            passport.authenticate('local', function(err, user, info) {
                if (err) { return res.send({ err, auth:false }); }
                
                if (!user) {                  
                    req.logOut()
                    return res.send({info, auth :false});
                }

                req.logIn(user, function(err) {
                    if (err) { return res.send(err); }
                    console.log({ "Req.user": req.user })
                   // res.redirect('/')
                    res.send({ message: 'Logged in', auth: true });        
                   
                });
            })(req, res);
        }
    )  


    return router

}

module.exports = routes