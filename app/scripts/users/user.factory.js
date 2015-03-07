;(function () {

	'use strict'

	angular.module('GeniusSports')

	.factory('UserFactory', ['rootUrl', '$cookieStore', '$location',

		function (rootUrl, $cookieStore, $location) {

			//get current user

			var currentUser = function () {
				return $cookieStore.get('currentUser');
			};

			//check user status

			var checkLoginStatus = function () {

				var user = currentUser();
				if(user) {
					//user session.token vs heroku session.token
				}
			};
			//add user
			var addUser = function (usrObj) {
				$http({
					method: 'GET',
					url: 'rootUrl' + 'login',
					params: userObj
				}).then (function (res) {
					$cookieStore.put('currentUser', res.data)
				});
			};

			 // Logout Method
      		var logoutUser = function () {
        		$cookieStore.remove('currentUser');
        		$location.path('/login');
      			}



      		return {
        		register : addUser, 
        		login : loginUser,
        		user : currentUser,
        		status : checkLoginStatus,
        		logout : logoutUser
      			};

    		}

  		]);

}());		

