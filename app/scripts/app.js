var modelo={base:'USD',valores:[{nombre:'MXN', valor:'18.38'},{nombre:'CAD', valor:'1.29'},{nombre:'JPY', valor:'101.73'},{nombre:'GBP', valor:'0.75'},{nombre:'EUR', valor:'0.89'}],resultado:[{}]};
var primerApp= angular.module("primerApp", []);
primerApp.controller("primerAppController", function($scope){
    $scope.conversiones=modelo;
});