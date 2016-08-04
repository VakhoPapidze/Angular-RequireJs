/**
 * Created by v.papidze on 8/1/2016.
 */

define(['modules/core/runners/logRunner'],function (logRunner) {

    var coreModule=angular.module('coreModule',['ui.router','ngAnimate','themeModule']);

    coreModule.run(logRunner);

    coreModule.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "/TestApp_WalletHub/App/modules/core/views/home.html",
                controller:'homeController'
            })
            .state('home.page', {
                url: "/page",
                templateUrl: "/TestApp_WalletHub/App/modules/core/views/home.page.html",
                controller: function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            .state('home.task', {
                url: "/task/:id",
                templateUrl: "/TestApp_WalletHub/App/modules/core/views/home.task8.html",
                controller: "task8Controller"
            })
            .state('about', {
                url: "/about",
                templateUrl: "/TestApp_WalletHub/App/modules/core/views/about.html",
            })
            .state('state2.list', {
                url: "/list",
                templateUrl: "partials/state2.list.html",
                controller: function($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            })
        .state('contact', {
            url: "/contact",
            templateUrl: "/TestApp_WalletHub/App/modules/core/views/contact.html",
        });
    });

    require(['modules/core/controllerReferances'], function (referances) {
        require(referances, function () {
            angular.bootstrap(document,['coreModule']);
        });
    });

});