const express = require('express');
const res = require('express/lib/response');
const path = require('path')
const app = express();



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});
app.get('/registro' , (req,res)=>{
    res.sendFile(path.join(__dirname, './views/registro.html'))
});

app.listen(process.env.PORT || 3030, () => console.log("Servidor"));

app.use(express.static('public'));