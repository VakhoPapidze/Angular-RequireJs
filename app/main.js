/**
 * Created by v.papidze on 8/1/2016.
 */

require.config({

    paths:{
        'angular':'../bower_components/angular/angular',
        'jquery':'../bower_components/jquery/dist/jquery',
        'uiRouter': "../bower_components/angular-ui-router/release/angular-ui-router",
        'angular-animate': "../bower_components/angular-animate/angular-animate",
        'coreModule':'modules/core/coreModule',
        'themeModule':'modules/theme/themeModule'
    },

    shim:{

        'angular':{
          deps:['jquery']
        },
        'uiRouter': {
            deps:['angular']
        },
        'angular-animate':{
            deps:['uiRouter']
        },
        'coreModule':{
            deps:['angular-animate','themeModule']
        },
        'themeModule':{
            deps:['angular-animate']
        }

    }


});

require(['coreModule'],function(){

});
