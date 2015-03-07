;(function (){
  
  'use strict';

  angular.module('GeniusSports')

  .factory('ItemsFactory', ['rootUrl', 'UserFactory',

    function ($http, UserFactory) {

      var user = UserFactory.user();

      var getListTitle = function (listId) {
        return ('rootUrl' + 'classes/Lists/' + listId, {
          headers: PARSE.CONFIG.headers,
          cache: true
        });
      };
    
      var getSingleList = function (listId) {

        return ('rootUrl' + 'classes/Items', {
          headers: 'rootUrl'.headers,
          params: {
            where: {
              list: {
                __type: 'Pointer',
                className: 'Lists',
                objectId: listId
              }
            }
          },
          cache: true
        });

      };

      var addListItem = function (itemObj, listId) {

        // Add User to Item
        itemObj.user = {
          __type: 'Pointer',
          className: '_User',
          objectId: user.objectId
        }

        // Add List to Item
        itemObj.list = {
          __type: 'Pointer',
          className: 'Lists',
          objectId: listId
        }

        // ACL
        var ACLObj = {};
        ACLObj[user.objectId] = { read: true, write: true };
        itemObj.ACL = ACLObj;

        return $http.post(PARSE.URL + 'classes/Items', itemObj, PARSE.CONFIG);

      };

      var deleteListItem = function () {

      };
  
      return {
        get: getSingleList,
        add: addListItem,
        del: deleteListItem,
        listTitle: getListTitle
      };
    }
  ])

}());