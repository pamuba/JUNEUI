var app = angular
                .module('myModule',[])
                .controller('myController', function($scope){
                    var technologies = [
                        { name:"C#", likes:0, dislikes:0},
                        { name:"Java", likes:0, dislikes:0},
                        { name:"Angular", likes:0, dislikes:0},
                        { name:"React", likes:0, dislikes:0},
                        { name:"Vue", likes:0, dislikes:0},
                        { name:"GrapQL", likes:0, dislikes:0},
                    ];

                    $scope.technologies = technologies;
                    $scope.incrementLikes = function(tech){
                        tech.likes++
                    }
                    $scope.incrementDisLikes = function(tech){
                        tech.dislikes++
                    }
                });