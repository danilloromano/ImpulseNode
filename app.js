var express = require('express');

var app = express();

app.set('view engine','ejs');
app.get('/cliente',function(req,res){
		res.render('cliente/cadastro_cliente');
});

app.listen(3000,function(){
	console.log("Rodando");
});