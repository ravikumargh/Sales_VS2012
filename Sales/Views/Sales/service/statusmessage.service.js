'use strict';
angular.module('AdminApp').factory('StatusmessageService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/statusmessage/';

        var dataFactory = {};
        dataFactory.addNewStatusmessage = function (status) {
            return $http.post(urlBase,  status );
        };

         
        dataFactory.getStatusmessages = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateStatusmessage = function (status) {
            return $http.put(urlBase ,  status );
        };

        dataFactory.deleteStatusmessage = function (status_id) {
            return $http.delete(urlBase + status_id + '/');
        };

        return dataFactory;
    }
]);
