;(function (){
  
  'use strict';

  angular.module('GeniusSports')

  .factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

    function ($http, SERVER, $cookieStore, $location) {

      // Log in a User
      var loginUser = function (userObj) {

        // $http({
        //   method: 'GET',
        //   url: SERVER.URL + 'login',
        //   headers: SERVER.CONFIG.headers,
        //   params: userObj
        // }).then (function (res) {
        //   console.log(res);
        //   $cookieStore.put('currentUser', res.data);
        // });
        
      };
  
      return {
        login : loginUser,
      };

    }

  ]);

}());