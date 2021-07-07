var app = angular.module('myModule',['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/first-msg', {
        // template:"<b>This is the first message</b>"
        templateUrl:"msg1.html",
        controller:'message1'
    })
    .when('/second-msg', {
        template:"<b>This is the second message</b>"
    })
    .when('/', {
        template:"<b>This is the HOME message</b>"
    })
    .otherwise({
        redirectTo:function(){
            alert("No Content")
            return "/second-msg"
        }
        // redirectTo:"/second-msg"
        // template:"<b>No Content Here. Plz click on the links</b>"
    })
}]);

app.controller('message1', function($scope){
    $scope.a = 11;
    $scope.b = 22;
})