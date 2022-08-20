const express= require('express');
const mongoose= require('mongoose');
const userRoutes=require('./routes')

const app= express();
const port=5000;

app.use(express.json());
app.use('/api',userRoutes);

app.get('/', function(req, res){
    res.send('Servidor en Node JS');
});

mongoose.connect("mongodb+srv://YullianaRoman:1234Yul@cluster0.5vmpd.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connect to MongoDB")).catch((error)=>console.error(error));



app.listen(port, () => console.log('server  listening on port',port));