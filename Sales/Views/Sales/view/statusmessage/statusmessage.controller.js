'use strict';

/**
 * @ngdoc function
 * @Message AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('StatusmessageController', ['$scope', 'StatusmessageService', '$uibModal', '$log', function ($scope, StatusmessageService, $uibModal, $log) {

      $scope.newstatusmessage = {
          'Message': '' 
      }

    
      $scope.init = function () {

          $scope.statusmessages = null;

          StatusmessageService.getStatusmessages()
              .then(function (response) {
                  $scope.statusmessages = response.data;
              },
              function (err) {

              });
      };

      $scope.deleteStatusmessage = function (statusmessage) {
          StatusmessageService.deleteStatusmessage(statusmessage.Id).then(function (response) {
              //_.remove($scope.statusmessages, function (statusmessage) {
              //    return statusmessage.Id;
              //});
              $scope.init();
          },
            function (err) {
                $scope.error = err;
            });
      }
      $scope.createNewStatusmessage = function () {
          $scope.error = undefined;
          //if (!$scope.newstatusmessage.Message) {
          //    $scope.error = 'Please enter valid statusmessage Message.';
          //    return;
          //}
          $scope.newstatusmessage.Message = "Statusmessage 1";
          $scope.addNew($scope.newstatusmessage);
      };

      $scope.addNew = function (newstatusmessage) {
          StatusmessageService.addNewStatusmessage(newstatusmessage).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }

      $scope.update = function (statusmessage) {
          StatusmessageService.updateStatusmessage(statusmessage).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }
      
      $scope.editStatusmessageModel = function (statusmessage) {
          $scope.selectedStatusmessage = angular.copy(statusmessage);

          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'StatusmessageModalContent.html',
              controller: 'StatusmessageModalInstanceCtrl',
              size: 'sm',
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (statusmessage) {
              $scope.update(statusmessage);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      }
      $scope.openNewStatusmessageModel = function () {
          $scope.selectedStatusmessage= $scope.newstatusmessage;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'StatusmessageModalContent.html',
              controller: 'StatusmessageModalInstanceCtrl',
              size: 'sm',
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (newStatusmessage) {
              $scope.addNew(newStatusmessage);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
      $scope.deleteStatusmessageModel = function (statusmessage) {
          $scope.selectedStatusmessage = statusmessage;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'StatusmessageDeleteConfirmationModalContent.html',
              controller: 'StatusmessageDeleteConfirmationModalInstanceControl',
              size: 'sm', 
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (selectedStatusmessage) {
              $scope.deleteStatusmessage(selectedStatusmessage);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }]);


angular.module('AdminApp').controller('StatusmessageModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedStatusmessage = parentScope.selectedStatusmessage;
    
    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedStatusmessage);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('StatusmessageDeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedStatusmessage = parentScope.selectedStatusmessage;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedStatusmessage);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});