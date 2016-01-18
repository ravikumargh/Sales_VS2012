'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/statusmessages', {
            templateUrl: 'views/statusmessages/statusmessages.html',
            controller: 'StatusmessageController'
        });
  });
