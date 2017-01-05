var UniqueDirective = function (MainService) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attrs, ngModel) {
            elem.on('blur', function (evt) {
                if (!ngModel || !elem.val()) return;
                var keyProperty = scope.$eval(attrs.pvUnique);
                var currentValue = elem.val();
                MainService.checkUniqueValue(keyProperty.key, keyProperty.property, currentValue)
                .then(function (unique) {
                    ngModel.$setValidity('unique', unique);
                }), function () {
                    ngModel.$setValidity('unique', true);
                }
            });
        }
    }
};
UniqueDirective.$inject = ['MainService'];