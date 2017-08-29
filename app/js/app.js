angular
    .module('app', [
        'ui.router',
        'satellizer',
        'ngAnimate',
        'ngMaterial',
        'LocalStorageModule',
        'md.data.table'
    ])
    .config(function ($urlRouterProvider) {
        // Parametros de configuración
        $urlRouterProvider.otherwise('login');
    })