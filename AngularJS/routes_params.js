var app = angular.module("myModule",['ngRoute'])
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl:"sumurl.html",
        controller:"sumurl"
    })
    .when('/sumfour/:a/:b/:c?/:d?', {
        templateUrl:"sumfour.html",
        controller:"sumfour"
    })
    .when('/suminput', {
        templateUrl:"suminput.html",
        controller:"suminput"
    })
    .when('/',{
        template:"<b>Click on the Links</b>"
    })
    .otherwise({
        template:"<b>No Content Here</b>"
    })
}]);

app.controller('sumurl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
}])

app.controller('suminput',['$scope','$location','$interpolate', function($scope,$location,$interpolate){
    $scope.a = 0
    $scope.b = 0

    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope);
        $location.path(url);
    }
}])

app.controller('sumfour',['$scope','$routeParams', function($scope,$routeParams){
    $scope.a = $routeParams.a
    $scope.b = $routeParams.b
    $scope.c = $routeParams.c
    $scope.d = $routeParams.d
}])