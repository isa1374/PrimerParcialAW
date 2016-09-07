        var modelo={acciones:[{nombre:"Carla",apellidos:"Flores",num:"A01331363",depto:"Sistemas", ocultar:false}]};
        var listaEmpleados= angular.module("listaEmpleados", []);
        listaEmpleados.controller("listaEmpleadosController", function($scope){
            $scope.empleados=modelo;
            $scope.nuevoEmpleado=function(nombre,apellidos,num,depto){
                $scope.empleados.acciones.push({nombre:nombre,apellidos:apellidos,num:num,depto:depto, ocultar:false});
            }
            $scope.buscar=function(opcion,textoBuscar){   
                switch(opcion){
                    case "nombre":
                        angular.forEach($scope.empleados.acciones, function(item){
                        if(!item.nombre.includes(textoBuscar)){
                            item.ocultar=true;
                        }else{
                            item.ocultar=false;
                        }
                        });
                    break;
                    case "apellidos":
                        angular.forEach($scope.empleados.acciones, function(item){
                        if(!item.apellidos.includes(textoBuscar)){
                            item.ocultar=true;
                        }else{
                            item.ocultar=false;
                        }
                    });
                    break;
                    case "numero":
                        angular.forEach($scope.empleados.acciones, function(item){
                        if(!item.num.includes(textoBuscar)){
                            item.ocultar=true;
                        }else{
                            item.ocultar=false;
                        }
                    });
                    break;
                    case "depto":
                        angular.forEach($scope.empleados.acciones, function(item){
                        if(!item.depto.includes(textoBuscar)){
                            item.ocultar=true;
                        }else{
                            item.ocultar=false;
                        }
                    });
                    break;
                }
            }
        $scope.borrar=function(i){   
                var index=$scope.empleados.acciones.indexOf(i);
                alert(index);
                $scope.empleados.acciones.splice(index,1);
            }
        
        $scope.modificar= function(i){
            $scope.empleados.acciones.shift(i);
            $scope.empleados.acciones.unshift({nombre:nombre,apellidos:apellidos,num:num,depto:depto, ocultar:false});
            }
        });