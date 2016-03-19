angular.module("socially").controller('PartiesListCtrl', ['$scope', '$http', '$meteor','$rootScope', function($scope, $http, $meteor, $rootScope){ // Creating a controller with protected variables

    $scope.parties = $meteor.collection(Parties); // Agrega al Scope una variable donde se carga la data de la coleccion "parties" alojada en la variaba "Parties"

	  $scope.remove = function(party){

		$scope.parties.remove(party);

	};

	$scope.show = function(){ //Mi funcion para ver el arreglo con la data cargada del servidor usando el boton debug
		alert(JSON.stringify($rootScope.currentUser));
	}

	$scope.removeAll = function(){
		$scope.parties.remove();
	}

}

]);