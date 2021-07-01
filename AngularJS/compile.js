var app = angular
                .module('myModule',[])
                .controller('myController', function($scope){
                    $scope.message = "This is a message from scope";
                });
app.directive("message", function(){
    return {
        compile:function(tElement, tAttributes){
            console.log(tAttributes.text + ' : In Compile');

            return{
                pre:function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + ' : In Pre')
                },
                post:function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + ' : In Post')
                },
            }
        },
        controller:function($scope, $element, $attrs){
            console.log($attrs.text + ' : In Controller')
        }
    }
})