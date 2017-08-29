angular
    .module('app')
    .config(routes);

function routes($stateProvider){

    $stateProvider
        .state('app',{
            access : [],
            templateUrl : 'views/layout/login.tpl.html',
            controller : 'loginController',
            controllerAs: 'vm',
            abstract : true
        })
        .state('app.login', {
            url: '/login',
            templateUrl: 'views/auth/login_view.html',
            controller: 'authController',
            controllerAs: 'vm'
        })
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard/home.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })
}