;(function () {
  
  'use strict';

  angular.module('GeniusSports', ['ngRoute', 'ngCookies'])

  .constant('SERVER', {
    
    URL: 'https://geniussports.herokuapp.com',
    
    CONFIG: {
      
      // headers : {
      //   'X-Parse-Application-Id' : 'QPhfi521jPOVih27xiiqooP9B2egqpLjKSbRDI2H',
      //   'X-Parse-REST-API-Key'  : '13hAN2gWrhn6RmijJ3TnZp8RRq7GkvBffVCKRvo4',
      //   'Content-Type' : 'application/json'
      // }
    } 
  })

  .config([ '$routeProvider', function ($routeProvider) {

    $routeProvider

    // Login Page
    .when('/login', {
      templateUrl: '/scripts/users/login.tpl.html',
      controller: 'UserCtrl'
    })

    // Main Page
    .when('/', {
      templateUrl: '',
      controller: ''
    })


    // Go Home ET
    .otherwise('/');
    
  }]);



}());