var modelo={};
var primerApp= angular.module("primerApp", []);
primerApp.controller("primerAppController", function($scope){
    $scope.conversiones=modelo;
    $scope.nuevaDivisa=function(paisOrigen, valorOrigen, paisConv, valorConv){
        
        $scope.divisas.acciones.push({paisOrigen: paisOrigen, valorOrigen: valorOrigen, paisConv:paisConv, valorConv:valorConv});
        
        
        $scope.calcular(opcion, valor){
            
            function(item){
                   
            }
            
            
        }
        
    }
});
