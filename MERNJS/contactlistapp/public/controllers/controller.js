function AppCtrl($scope, $http){
    console.log("Hello World From Controller")

   let refresh = function(){
        $http.get('/contactlist').success(function(response){
        $scope.contactlist = response
        $scope.contact = ""
    });
   }

   refresh()
    
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(response){
           console.log(response);
           refresh();
        });
    }
}