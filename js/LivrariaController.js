app.controller('LivrariaController', function ($scope, $http) {

    $scope.livro = {};
    $scope.listaLivros = [];

    $scope.adiciona = function () {
        $scope.livro.id = $scope.listaLivros.lenght+1;

        $http.post('http://localhost:3000/livros', $scope.livro).success(
            function (dados) {
                $scope.lista();
            }
        );
    };


    $scope.lista = function () {

        $http.get('http://localhost:3000/livros').success(
            function (dados) {
                $scope.listaLivros = dados;
            }
        );
    };

    $scope.deleta = function (livro) {
	var id = livro.id;
    	$http.delete('http://localhost:3000/livros/'+id).success(
		function(dados){
			$scope.lista();
		}
	);
    };

    $scope.edita = function (livro){
	var id = livro.id;
	$http.put('http://localhost:3000/livros/'+id, $scope.livro).success(
		function (data){
			$scope.lista();
		}
	);
    };

    $scope.lista();

});
