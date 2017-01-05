MainModule.service("ModalService", ['$uibModal', function ($uibModal) {

    var modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        templateUrl: '/pages/deleteModal.html'
    };

    var modalOptions = {
        closeButtonText: 'Close',
        actionButtonText: 'OK',
        headerText: 'Proceed ?',
        bodyText: 'Perform this action ?'
    };
    
    this.showModal = function (customModalDefaults, customModalOptions) {
        if (!customModalDefaults) {
            customModalDefaults = {};
        }
        customModalDefaults.backdrop = 'static';
        return this.show(customModalDefaults, customModalOptions);
    };
    
    this.show = function (customModalDefaults, customModalOptions) {
        //temporary objects
        var tempModalDefaults = {};
        var tempModalOptions = {};

        // shallow copy the properties of the source objects from right to left, all the way to the destination object.
        //var src1 = { name: 'David', age: 30 }; // source 1
        //var src2 = { age: 26, skill: {} }; // source 2
        //var dst = {}; // destination
        //console.log(angular.extend(dst, src1, src2));
        // Output: { name: 'David', age: 26, skill: {} }

        angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

        angular.extend(tempModalOptions, modalOptions, customModalOptions);

        if (!tempModalDefaults.controller) {

            tempModalDefaults.controller = function ($scope, $uibModalInstance) {
                $scope.modalOptions = tempModalOptions;

                $scope.modalOptions.ok = function (result) {
                    $uibModalInstance.close(result);
                };

                $scope.modalOptions.close = function (result) {
                    $uibModalInstance.dismiss('cancel');
                };
            }
        }
        return $uibModal.open(tempModalDefaults).result;
    };
    
}]);