'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/deal', {
            templateUrl: 'views/admin/view/deal/deals.html',
            controller: 'DealController'
        });
  });
