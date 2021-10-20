const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const routes = require('./routes/Index');


app.use(session({
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:600000},
    secret:"test123"
}));

app.use((req,res,next)=>{
   if (!req.session.cart){
       req.session.cart = {};
   }
   next();
});


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,"public")));
app.use('/',routes);
app.listen(3000,()=>console.log("Server is listen on port 3000"));


