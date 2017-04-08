var myApp = angular.module('myApp', []);

myApp.controller('dashitems', function($scope, $interval, dateFilter) {
                    
    $scope.ano_mes = dateFilter(new Date(), 'yyyyMM');
    $scope.data_exibir = moment($scope.ano_mes, "YYYYMM").format('MMMM YYYY');
        
    $scope.currentTime = dateFilter(new Date(), 'hh:mm:ss');
    var updateTime = $interval(function() {
        $scope.currentTime = dateFilter(new Date(), 'hh:mm:ss');
    }, 1000);
    
    $scope.carregar = function (dat_carregar) {        
        
        $scope.sla          = 0;
        $scope.abertos      = 0;
        $scope.encerrados   = 0;
        $scope.previstos    = 0;
        $scope.no_prazo     = 0;
        $scope.reabertos    = 0;
        
        $scope.carregou = true;
        
        myData = new Firebase("https://itdashboard.firebaseio.com/ambev/volpi/" + dat_carregar);
        myData.once('value', function(snapshot){
            
            if (snapshot.exists()) {
                $scope.sla          = snapshot.child('sla').val().toFixed(1);
                $scope.abertos      = snapshot.child('abertos').val();
                $scope.encerrados   = snapshot.child('encerrados').val();
                $scope.previstos    = snapshot.child('previstos').val();
                $scope.no_prazo     = snapshot.child('no_prazo').val();
                $scope.reabertos    = snapshot.child('reabertos').val();

                $scope.$apply();
                $scope.carregou = false;

                $scope.data_exibir = moment($scope.ano_mes, "YYYYMM").format('MMMM YYYY');
            } else {
                $scope.carregou = false;
            }
            
            
            
        });
    };
    
    $scope.before = function() {
        $scope.ano_mes = moment($scope.ano_mes, "YYYYMM").subtract(1, 'months').format('YYYYMM');
        $scope.carregar($scope.ano_mes);
    };
    
    $scope.after = function() {
        $scope.ano_mes = moment($scope.ano_mes, "YYYYMM").add(1, 'months').format('YYYYMM');
        $scope.carregar($scope.ano_mes);
    };
    
    
});