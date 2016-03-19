angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteor',

    function($scope, $stateParams, $meteor){ 

      $scope.party = $meteor.object(Parties, $stateParams.partyId, false); // El parametro "false" evita el autosave a la bd con cada modificacion. Se usa para reservar el guardado de datos a un boton.

      $scope.save = function() { //Funcion para boton guardar

        $scope.party.save().then(function(numberOfDocs){

          console.log('save success doc affected ', numberOfDocs);

        }, function(error){

          console.log('save error', error);

        });

      }; 

      $scope.reset = function(){ $scope.party.reset() }; //Funcion para boton de desacher cambios no guardados aun.

    }]);