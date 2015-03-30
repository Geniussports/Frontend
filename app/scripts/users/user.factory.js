;(function (){
  
  'use strict';

  angular.module('GeniusSports')

  .factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

    function ($http, SERVER, $cookieStore, $location) {

      // Register a User
      var registerUser = function (userObj) {
        
        return $http.post(SERVER.URL + 'users', userObj, SERVER.CONFIG);
           
      };

      // Login a User
      var loginUser = function (userObj) {
        
        return $http.post(SERVER.URL + 'users/sign_in', userObj);
                       
      };

      // Add a Team
      var addATeam = function (teamObj) {

        return $http.post(SERVER.URL + 'teams/', teamObj, {
          params: {
            auth_token: $cookieStore.get('auth_token')
          }
        });              
      };

      var getAllTeams = function () {
        return $http.get(SERVER.URL + 'user', {
          params: {
            auth_token: $cookieStore.get('auth_token')
          }
        });
      };
  
      return {
        register : registerUser,
        login : loginUser,
        addTeam : addATeam,
        getTeams : getAllTeams
      };

    }

  ]);

}());