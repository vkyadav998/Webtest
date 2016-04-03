var app = angular.module('myApp', ['ngRoute','ngResource']);

app.config(function($routeProvider){
  
  $routeProvider
  
  .when('/',{
    templateUrl:'pages/home.html',
    controller: 'HomeController'
    
  })
  .when('/library',{
    templateUrl:'pages/library.html',
    controller: 'libraryController'
    
  })
  .when('/profile',{
    templateUrl:'pages/profile.html',
    controller: 'profileController'
    
  })
  
  
});

app.service("profileServices",function(){
    
    this.adminName="Vipin Yadav"
    this.adminAddress="Vipin Yadav, R.S. Dairy Form, Galegaon, Mohone, Kalyan, Thane, Maharashtra-421102."
    this.adminMob="9769939005"
    this.adminEmail="vkyadav998@gmail.com"
    this.adminEmail2="vipinyadav@affixus.com"
    this.name="Five Point Someone"
    this.category="Nobels"
    this.others="Harihar"
    
});//end cityServices


app.controller("HomeController", ['$scope','profileServices', function($scope,profileServices){
    
   $scope.name=profileServices.name;
    $scope.$watch('name',function(){
        profileServices.name= $scope.name;
    });
    
    $scope.category=profileServices.category;
    $scope.$watch('category',function(){
        profileServices.category= $scope.category;
    });
    
    $scope.others=profileServices.others;
    $scope.$watch('others',function(){
        profileServices.others= $scope.others;
    });
    
}]);//end HomeController

app.controller("libraryController", ['$scope','profileServices', function($scope,profileServices){
      
  $scope.name=profileServices.name;
  $scope.category=profileServices.category;
  $scope.others=profileServices.others;
}]);//end libraryController

app.controller("profileController", ['$scope','profileServices', function($scope,profileServices){
  
  $scope.adminName=profileServices.adminName;
  $scope.adminAddress=profileServices.adminAddress;
  $scope.adminMob=profileServices.adminMob;
  $scope.adminEmail=profileServices.adminEmail;
  $scope.adminEmail2=profileServices.adminEmail2;    
  $scope.name=profileServices.name;
  $scope.category=profileServices.category;
  $scope.others=profileServices.others;
    
    
    $scope.editProf=function(){
        $scope.edit = true;
    }
    $scope.saveProf=function(){
        $scope.edit = false;
    }
    
    
}]);//end profileController

