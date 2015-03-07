;(function () {

	'use strict'


	angular.module('GeniusSports')

	.controller('NavCtrl', ['$scope', 'UserFactory', 

		function ($scope, UserFactory) {

			
      			if (user) {
        			$scope.loggedin = true;
        			$scope.user = user;
      				} else {
        			$scope.loggedin = false;
      				}


      $scope.logout = function () {
        UserFactory.logout();

    };  


    }

  ])

}());