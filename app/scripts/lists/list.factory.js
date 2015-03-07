;(function (){
  
  'use strict';

  angular.module('GeniusSports')
//beyond this point script needs to be revised
  .factory('ListsFactory', ['$http', 'PARSE', 'UserFactory',

    function ($http, PARSE, UserFactory) {

      var user = UserFactory.user();

      var getAllLists = function () {
        return ('root.Url' + 'classes/Lists', {
          headers: rootUrl.headers,
          cache: true
        });
      };

      var addList = function (listObj) {
        // Add User Pointer to my list object
        listObj.user = {
          __type: 'Pointer',
          className: '_User',
          objectId: user.objectId
        }

        // Set up Access Control
        var ACLObj = {};
        ACLObj[user.objectId] = {
          'read' : true,
          'write' : true
        }

        listObj.ACL = ACLObj;

        return ('rootUrl' + 'classes/Lists', listObj,);
      };

      var deleteList = function (id) {
        return ('rootUrl' + 'classes/Lists/' + id, );
      };
    
  
      return {
        get : getAllLists,
        add : addList,
        del : deleteList
      };

    }

  ])

}());