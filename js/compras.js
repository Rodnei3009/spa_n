var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    
    $scope.prod_incluir = "";
    
    $scope.categorias = [{
      id: 1,
      label: 'Alimentos'
    }, {
      id: 2,
      label: 'Bebidas'
    }];
    
    $scope.selected = $scope.categorias[0];
    
    $scope.produtos = [{
      id: 1,
      label: 'Arroz',
      categ: 1       
    }, {
      id: 2,
      label: 'Feijão',
      categ: 1    
    }, {
      id: 3,
      label: 'Cerveja',
      categ: 2    
    }, {
      id: 4,
      label: 'Refrigerante',
      categ: 2    
    }];
    
    $scope.saveProduct = function(desc, categ){
        //alert(desc + " - " + categ);
        if (desc != "") {
            $scope.produtos.push({id:10, label: desc, categ: categ});
            $scope.prod_incluir = "";
        }    
    };
    
});