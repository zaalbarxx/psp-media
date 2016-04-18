import angular from 'angular';

const UiSelectRequired = () => {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, elm, attrs, ctrl) {
            var addValidator, handle, removeValidator, required;
            addValidator = function() {
                return ctrl.$validators.uiSelectRequired = function (modelValue, viewValue) {
                    if (attrs.uiSelectRequired) {
                        var isRequired = scope.$eval(attrs.uiSelectRequired)
                        if (isRequired == false)
                            return true;
                    }
                    var determineVal;
                    if (angular.isArray(modelValue)) {
                        determineVal = modelValue;
                    } else if (angular.isArray(viewValue)) {
                        determineVal = viewValue;
                    } else {
                        return false;
                    }
                    return determineVal.length > 0;
                };
            };
            removeValidator = function() {
                return ctrl.$validators.uiSelectRequired = function() {
                    return true;
                };
            };
            handle = function(isRequired) {
                if (isRequired) {
                    return addValidator();
                } else {
                    return removeValidator();
                }
            };
            required = scope.$eval(attrs.uiSelectRequired);
            handle(required);
            return attrs.$observe('required', function(newValue) {
                return handle(newValue);
            });
        }
    };
};

/**
 * Define ThirdParties module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular.module('Starter.App.UiSelectRequired', []).directive('uiSelectRequired', UiSelectRequired).name;

