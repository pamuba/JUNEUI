//modules are like angular container
//a feature implementation of the project
//modular project


//1. Create the module
var myApp = angular.module("myModule",[]);

//2 Create the cntroller and add it to the module
    myApp.controller("myController" , function($scope){
        $scope.message = "AngularJS Demos"
        $scope.name = "John"
    })
    myApp.controller("myController1", function($scope){
        $scope.message = "AngularJS Demos from 1"
        $scope.name = "John from 1"
    })


//3.Attch the controller to the module
// myApp.controller("myController", myController);
// myApp.controller("myController1", myController1);