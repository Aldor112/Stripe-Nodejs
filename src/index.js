const express= require("express");
const exphbs=require("express-handlebars");
const path=require("path");
//Inicializacion
const app = express();

//Settings
app.set('views',path.join(__dirname,'views'));
app.engine(".hbs",exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');
//Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Starting the server
app.listen(3000,()=>{
    console.log("Server on Port: 3000");
});