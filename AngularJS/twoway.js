var myApp = angular.module("myModule",[]);

myApp.controller("myController" , function($scope){
    $scope.contact = {name:"John", email:"email", number:"number", _id:"id"}
})
