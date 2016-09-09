var modelo={base:'USD',valores:[{nombre:'MXN', valor:'18.38'},{nombre:'CAD', valor:'1.29'},{nombre:'JPY', valor:'101.73'},{nombre:'GBP', valor:'0.75'},{nombre:'EUR', valor:'0.89'}],resultado:[{resultado: 0.0}]}; 
var primerApp= angular.module("primerApp", []);
primerApp.controller("primerAppController", function($scope){
    $scope.conversiones=modelo;
    $scope.nuevaconv=function(nombre, resultado){
        $scope.conversiones.valores.push({nombre:nombre}); 
        $scope.conversiones.resultado.push({resultado:resultado}); 
    }
    $scope.calcular=function(original, cantidad, convertir){
        var resp;
        angular.forEach($scope.conversiones.valores, function(it){
            if(it.nombre.includes(origional)){
                angular.forEach($scope.conversiones.valores, function(item){
                     if(item.nombre.includes(convertir)){
                            resp = ((cantidad/it.valor)/item.valor);
                //cantidad entre valor en dolares del elegido, entre valor en dolares de la conversión 
                         $scope.conversiones.valores.push({nombre:convertir});
                         $scope.conversiones.resultado.push({resultado:resp});
                            
                    }
                });
            }
        });
    }

});



