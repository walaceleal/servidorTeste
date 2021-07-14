const express = require('express')

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.json({status: 'ok'});
});

app.listen(80, ()=>{
    console.log('Servidor rodando porta 80')
});