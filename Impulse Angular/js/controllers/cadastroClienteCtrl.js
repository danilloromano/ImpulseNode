angular.module("impulse").controller("cadastroClienteCtrl", function($scope, $http){
  let listAllClients = function(){
    $http.get("http://private-7feae-impulse4.apiary-mock.com/clientsTable").success(function(data, status){
      $scope.clientes = data;
    });
  };

  $scope.clientes = [
  ];

  $scope.adicionarCliente = function(cliente){
    $http.post("http://private-7feae-impulse4.apiary-mock.com/clientsTable", cliente).success(function(data){
      delete $scope.cliente;
      $scope.clienteForm.$setPristine();
      listAllClients();
    });
  };

  $scope.clienteSelecionado = function(clientes) {
    return $scope.clientes.some(function (cliente) {
      return cliente.selecionado;
    });
  };

  $scope.excluirCliente = function(clientes){
    $scope.clientes = $scope.clientes.filter(function(cliente){
      if(!cliente.selecionado) return cliente;
    });
  };

  $scope.ordenarPor = function(nome) {
    $scope.criterioDeOrdenacao = nome;
    $scope.direcao = !$scope.direcao;
  };

  listAllClients();
});
