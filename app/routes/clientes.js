
module.exports = function(app){
app.get("/clientes",function(req,res){
		res.render('clientes/lista');
	});
}

module.exports = function(app) {
    app.get("/clientes",function(req,res) {
       var connection = app.infra.connectionFactory();
        connection.query('select u.id,u.name,u.lastname,u.role,u.active,u.password,d.cpf,d.tel,d.mail,d.sex,d.address from user u join user_data d on d.id_user = u.id group by name Order by u.id,u.name,u.lastname,d.cpf,d.tel,d.mail,d.sex,d.address,u.role,u.active,u.password',function(err,results){
 
            res.send(results);
        });

        connection.end();

    });
}