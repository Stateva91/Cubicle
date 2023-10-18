const express=require('express');
const mongoose=require('mongoose');


const app=express();
const PORT=5000;

const expressConfig=require('./config/expressConfig');
const handlebarsConfig=require('./config/handlebarsConfig');
const dbConnect=require('./config/dbConfig');
const routes=require('./routes');

//app.use(express.static(path.resolve(__dirname, 'public')));
// app.use(express.static(path.))

dbConnect()
.then(()=> console.log('DB Connected successfully'))
.catch(err=>
    console.log('DB error: ', err.message));

expressConfig(app);
handlebarsConfig(app);

app.use(routes);
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}...`));
