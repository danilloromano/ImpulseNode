
module.exports = function(app) {
    app.get("/clientes",function(req,res) {
       var connection = app.infra.connectionFactory();
       var clientesBanco = new app.infra.ClientesDAO(connection);
		
		 clientesBanco.lista(function(erros,results){
		 		res.send(results)
		 });
            
      

        connection.end();

    });

    app.get("clientes/remove",function() {
       var connection = app.infra.connectionFactory();
       var clientesBanco = app.infra.ClientesDAO(connection);
	   var	cliente = ClientesDAO.carrega(id,callback);
		 if (cliente){

		 		ClientesDAO.remove(cliente,callback);
		 }
		 });
}