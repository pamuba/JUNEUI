var app = angular
                .module('myModule',[])
                .controller('myController', function($scope){
                    $scope.message = "This is a message from scope";
                });
app.directive("myInfoMsg", function(){
    return {
        // template:"<b>This is a message</b>"
        templateUrl:"my-info-msg.html"
    }
})