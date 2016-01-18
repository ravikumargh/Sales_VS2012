'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/dealcurrentstatus', {
            templateUrl: 'views/dealcurrentstatus/dealcurrentstatuss.html',
            controller: 'DealCurrentStatusController'
        });
  });
