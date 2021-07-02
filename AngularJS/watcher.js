var app = angular
                .module('myModule',[])
                .controller('myController', function($scope){
                    $scope.a = 1;
                    $scope.b = 2;
                    $scope.c = 3;
                    

                    $scope.$watchGroup(['a','b'], function(newValue, oldValue){
                        if(newValue != oldValue){
                            $scope.c = $scope.a * $scope.b;
                        }
                    })

                    //#region 
                    // $scope.updateC = function(){
                    //     $scope.c = $scope.a * 4;
                    // };

                    // $scope.$watch("a", function(newValue, oldValue){
                    //     if(newValue != oldValue){
                    //         $scope.b = $scope.a * 4;
                    //     }
                    // });

                    // $scope.$watch("b", function(newValue, oldValue){
                    //     if(newValue != oldValue){
                    //         $scope.c = $scope.b * 4;
                    //     }
                    // });

                    // //manually creting a watcher
                    // $scope.$watch("c", function(newValue, oldValue){
                    //     if(newValue != oldValue){
                    //         console.log("Updated C:" + newValue)
                    //     }
                    // });
                    //#endregion
                });
