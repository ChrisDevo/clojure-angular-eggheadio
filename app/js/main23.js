var app = angular.module("app", []);

app.controller("MyCtrl", ['$scope', '$http', function(b, a) {
    console.log(b);
}]);

app.directive("myDirective", function() {
    return {
        link: function($scope, scope, attrs) {
//            console.log(element);
        }
    }
});