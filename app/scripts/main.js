;(function () {
 
 'use strict';

 angular.module('GeniusSports', ['ngRoute', 'ngCookies'])

 .constant('SERVER', {

   //rootUrl:'https';
   
   URL: 'https://geniussports.herokuapp.com/',
   
   CONFIG: {
     
     headers : {
       'Content-Type' : 'application/json'
     }
   } 
 })

 .config([ '$routeProvider', function ($routeProvider) {

   $routeProvider

   // Login Page
   .when('/', {
     templateUrl: '/scripts/users/login.tpl.html',
     controller: 'UserCtrl'
   })

   // Register Page 
   .when('/register', {
     templateUrl: '/scripts/users/register.tpl.html',
     controller: 'UserCtrl'
   })

   // Your Teams Page
   .when('/yourteams/:id', {
     templateUrl: '/scripts/users/teams.tpl.html',
     controller: 'UserCtrl'
   })

   // Go Home ET
   .otherwise('/');
   
 }]);


}());