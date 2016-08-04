/**
 * Created by v.papidze on 8/1/2016.
 */

define(function(){

    angular.module('coreModule')
        .controller('task8Controller', ['$scope',function($scope){

            $scope.input1="";
            $scope.input2="";
            $scope.input3="";

            var next1 = function(){
                return $scope.form.input1.$valid
            }
            var next2 = function(){
                return .$valid
            }

            $scope.$watch(next1, function (newVal,oldVal) {

                if(newVal && !oldVal){
                    var element = angular.element('[ng-model="input2"]');
                    element.focus();
                }else if(!newVal && oldVal){
                    debugger
                }

            });

            $scope.$watch(next2, function (newVal,oldVal) {

                if(newVal && !oldVal){
                    var element = angular.element('[ng-model="input3"]');
                    element.focus();
                }else if(!newVal && oldVal){
                    var element = angular.element('[ng-model="input1"]');
                    element.focus();
                }

            });


        }]);

});