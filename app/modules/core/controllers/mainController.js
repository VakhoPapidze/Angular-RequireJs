/**
 * Created by v.papidze on 8/1/2016.
 */

define(function () {

    var coreModule=angular.module('coreModule');

    coreModule.controller('mainController', function ($scope) {
        $scope.title="Hello Angular";
    });

});
