;(function () {
  
  'use strict';

  angular.module('GeniusSports', ['ngRoute', 'ngCookies'])

  .constant('SERVER', {

    //rootUrl:'https';
    
    URL: '',
    
    CONFIG: {
      
      headers : {
        'X-Parse-Application-Id' : 'QPhfi521jPOVih27xiiqooP9B2egqpLjKSbRDI2H',
        'X-Parse-REST-API-Key'  : '13hAN2gWrhn6RmijJ3TnZp8RRq7GkvBffVCKRvo4',
        'Content-Type' : 'application/json'
      }
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
      templateUrl: '/scripts/users/main.tpl.html',
      controller: 'UserCtrl'
    })

    //Coach's page
    .when('/', {
      templateUrl: '/scripts/users/coach.tpl.html',
      controller: 'UserCtrl'
    })

    //parents page
    .when('/', {
      templateUrl: '/scripts/users/parents.tpl.html',
      controller: 'UserCtrl'
    })

    //coach's lists
    .when('/', {
      templateUrl: '/scripts/lists/coaches.list.tpl.html',
      controller: 'ListCtrl'
    })

    //parents lists
    .when('/', {
      templateUrl: '/scripts/lists/parents.list.tpl.html',
      controller: 'ListCtrl'
    })

    //items template
    .when('/', {
      templateUrl: '/scripts/items/item.tpl.html',
      controller: 'ItemsCtrl'
    })
    
    


    // Go Home ET
    .otherwise('/');
    
  }]);



}());