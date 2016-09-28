function ClientesDAO(connection){
	this.connection = connection;
}

			ClientesDAO.prototype.lista = function(callback){
		  		this.connection.query('select u.id,u.name,u.lastname,u.role,u.active,u.password,d.cpf,d.tel,d.mail,d.sex,d.address from user u join user_data d on d.id_user = u.id group by name Order by u.id,u.name,u.lastname,d.cpf,d.tel,d.mail,d.sex,d.address,u.role,u.active,u.password',callback);

			}

			ClientesDAO.prototype.remove = function(callback){
		  		this.connection.query('update ',callback);

			}

			ClientesDAO.prototype.altera = function(callback){
		  		this.connection.query('update ',callback);

			}

			ClientesDAO.prototype.inclui = function(callback){
		  		this.connection.query('insert into ',callback);

			}

module.exports = function(){
	return ClientesDAO;		
}