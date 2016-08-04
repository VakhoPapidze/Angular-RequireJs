/**
 * Created by v.papidze on 8/1/2016.
 */

define(function(){

    var themeModule=angular.module('themeModule',[]);

    themeModule.run(['$log',function($log){

        $log.info("Initialized th themeModule");

    }]);

});