var primerApp= angular.module("primerApp", []);
var modelo={base:'USD',
 valores:[{nombre:'USD', valor:'1'},
          {nombre:'MXN', valor:'18.83'},
          {nombre:'CAD', valor:'1.3'},
          {nombre:'JPY', valor:'102.87'},
          {nombre:'GBP', valor:'0.7543'},
          {nombre:'EUR', valor:'0.89'}],
 resultado:[]};
/*primerApp.run(function($http){
    $http.get('./scripts/datos.json').success(function(data){
        $scope.conversiones = data;
    });
});*/
primerApp.controller("primerAppController", function($scope,$filter){
    $scope.valor = 1;
    $scope.conversiones=modelo;
    $scope.calcular=function(valor,original,mxnRes,usdRes,eurRes,jpyRes,cadRes,gbpRes){
        $scope.conversiones.resultado=[];
        var or=[];
        or=$filter('filter')($scope.conversiones.valores,{nombre:original});
        var orVal=or[0].valor;
        if(mxnRes){
            var mx=[];
            mx = $filter('filter')($scope.conversiones.valores,{nombre:'MXN'});
            var mxnVal=mx[0].valor;
            var valorRes=Math.floor(valor/orVal*mxnVal*1000)/1000;
            $scope.conversiones.resultado.push({imagen:'./images/m.png' ,nombre:'MXN',valor:valorRes});
        }
        if(usdRes){
            var mx=[];
            mx = $filter('filter')($scope.conversiones.valores,{nombre:'USD'});
            var mxnVal=mx[0].valor;
            var valorRes=Math.floor(valor/orVal*mxnVal*1000)/1000;
            $scope.conversiones.resultado.push({imagen:'./images/us.png',nombre:'USD', valor:valorRes});
        }
        if(eurRes){
            var mx=[];
            mx = $filter('filter')($scope.conversiones.valores,{nombre:'EUR'});
            var mxnVal=mx[0].valor;
            var valorRes=Math.floor(valor/orVal*mxnVal*1000)/1000;
            $scope.conversiones.resultado.push({imagen:'./images/eu.png',nombre:'EUR', valor:valorRes});
        }
        if(jpyRes){
            var mx=[];
            mx = $filter('filter')($scope.conversiones.valores,{nombre:'JPY'});
            var mxnVal=mx[0].valor;
            var valorRes=Math.floor(valor/orVal*mxnVal*1000)/1000;
            $scope.conversiones.resultado.push({imagen:'./images/j.png',nombre:'JPY', valor:valorRes});
        }
        if(cadRes){
            var mx=[];
            mx = $filter('filter')($scope.conversiones.valores,{nombre:'CAD'});
            var mxnVal=mx[0].valor;
            var valorRes=Math.floor(valor/orVal*mxnVal*1000)/1000;
            $scope.conversiones.resultado.push({imagen:'./images/c.png',nombre:'CAD', valor:valorRes});
        }
        if(gbpRes){
            var mx=[];
            mx = $filter('filter')($scope.conversiones.valores,{nombre:'GBP'});
            var mxnVal=mx[0].valor;
            var valorRes=Math.floor(valor/orVal*mxnVal*1000)/1000;
            $scope.conversiones.resultado.push({imagen:'./images/uk.png',nombre:'GBP', valor:valorRes});
        }
        
    }
});



