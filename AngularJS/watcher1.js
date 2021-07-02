var app = angular
                .module('myModule',[])
                .controller('myController', function($scope){
                  $scope.o = {
                      a:1,
                      b:2,
                      c:4
                  }
                    
//#region 
                    // $scope.$watch("o", function(newValue, oldValue){
                    //     if(newValue != oldValue){
                    //         $scope.o.c = $scope.o.a * $scope.o.b;
                    //     }
                    // }, true)
//#endregion

                    $scope.$watchGroup(['o.a', 'o.b'], function(newValue, oldValue){
                        if(newValue != oldValue){
                            $scope.o.c = $scope.o.a * $scope.o.b;
                        }
                    })
                })
