var myApp = angular.module("myModule",[]);

myApp.controller("myController" , function($scope){
    var employee = {
        firstName:"John",
        lastName:"Smith",
        gender:"male",
        flag:"/images/flag.jpg"
    }

    $scope.employee = employee
})
