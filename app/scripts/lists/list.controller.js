;(function (){
  
  'use strict';

  angular.module('GeniusSports')

  .controller('ListCtrl', ['$scope', 'ListsFactory', '$cacheFactory',

    function ($scope, ListsFactory, $cacheFactory) {

      var cache = $cacheFactory.get('$http');

      $scope.lists = [];

      ListsFactory.get().success( function (response) {
        $scope.lists = response.results;
      });
    
      $scope.addList = function (listObj) {
        $scope.list = {};
        ListsFactory.add(listObj).success( function (results) {
          listObj.objectId = results.objectId;
          $scope.lists.push(listObj);
          cache.remove('rootUrl');
        });
      };

      $scope.deleteMe = function (id, index) {
        ListsFactory.del(id).success( function (response) {
          $scope.lists.splice(index, 1);
          cache.remove('rootUrl');
        });
      };

    }

  ])

}());