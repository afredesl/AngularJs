angular
    .module('app')
    .config(routes);

function routes($stateProvider){

    $stateProvider
        .state('app',{
            access : [],
            templateUrl : 'views/layout/navbar_view.html',
            controller : 'navbarController',
            controllerAs: 'vm',
            abstract : true
        })
        .state('app.login',{
            url : '/login',
            access : [],
            views : {
                content:{
                    templateUrl : 'views/auth/login_view.html',
                    controller : 'authController',
                    controllerAs : 'vm'
                }
            }

        })
}