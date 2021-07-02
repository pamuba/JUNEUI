var app = angular
                .module('myModule',[])
                .controller('myController', function($scope){
                    $scope.emps = [
                        {empno:"10001", ename:"Jack"},
                        {empno:"10002", ename:"John"},
                        {empno:"10003", ename:"Jill"},
                        {empno:"10004", ename:"Joan"},
                        {empno:"10005", ename:"Jonny"}
                    ];

                    $scope.addEmp = function(){
                        var newEmpNo = 1000 * $scope.emps.length + 1;
                        var newEname = "ename"+newEmpNo;

                        $scope.emps.push({empno:newEmpNo, ename:newEname})
                    };
                    $scope.modify3rdEmp = function(){
                        $scope.emps[2].ename = "Test"
                    }

                    //doesnt work
                    // $scope.$watch('emps', function(newValue, oldValue){
                    //     console.log("No.of Employees:"+$scope.emps.length)
                    // })

                    //works for addition, not for modification
                    // $scope.$watchCollection('emps', function(newValue, oldValue){
                    //     console.log("No.of Employees:"+$scope.emps.length)
                    // })

                    //works for both addition and modification, then we need a equality watcher
                    $scope.$watch('emps', function(newValue, oldValue){
                        console.log("No.of Employees:"+$scope.emps.length)
                    }, true)

                })
