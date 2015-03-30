;(function (){
  
  'use strict';

  angular.module('GeniusSports')

  .controller('UserCtrl', ['$scope', 'UserFactory', '$location', "SERVER", "$cookieStore",

    function ($scope, UserFactory, $location, SERVER, $cookieStore) {

      // $scope.allTeams = [];
      $scope.user = {};
      // Register Method
      $scope.registerUser = function (userObj) {
        // console.log(userObj);
        UserFactory.register({user: userObj})
          .success( function (res) {
            $scope.user = res.user;
            $cookieStore.put('auth_token', res.user.authentication_token);
            $cookieStore.put('currentUser', res.user);
            $location.path('/yourteams/' + res.user.id);
            }
          );
      };

      // Login Method
      $scope.loginUser = function (userObj) {
        // console.log(userObj);
        UserFactory.login({user: userObj})  
          .success( function (res) {
              $scope.user = res.user;
              $cookieStore.put('auth_token', res.user.authentication_token);
              $cookieStore.put('currentUser', res.user);
              $location.path('/yourteams/' + res.user.id);
              $scope.allTeams = res.teams;
              console.log($scope.allTeams);
            }
          );  

      };

      // Add Team Method
      $scope.addTeam = function (teamObj) {
        // console.log(userObj);
        UserFactory.addTeam({team: teamObj})
          .success( function (res) {
            console.log(res);
            var user = $cookieStore.get('currentUser');
            $location.path('/yourteams/' + user.id);
            }
          ); 

      };

      // // Add Player Method
      // $scope.addPlayer = function (playerObj) {
      //   // console.log(userObj);
      //   UserFactory.addTeam({player: teamObj})
      //     .success( function (res) {
      //       console.log(res);
      //       var user = $cookieStore.get('currentUser');
      //       $location.path('/team/' + user.id);
      //       }
      //     ); 

      // };

      UserFactory.getTeams()
        .success( function (res) {
          $scope.allTeams = res.teams;
        });
    
    }

  ]);

}());