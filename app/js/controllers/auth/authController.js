angular
    .module('app')
    .controller('authController', authController);

function authController($state, $mdToast){
    var vm = this;



    vm.login = login;


    init();
    //////////
    function init(){
        console.log("Welcome to login");
    }

    function login(){
        if(vm.password == '182508500' && vm.username == 'alex@octano.cl'){
            vm.status = 1;
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Bienvenido '+ vm.username)
                    .hideDelay(3000)
                    .theme('success-toast')
            );
            $state.go('app.dashboard');
        }else{
            vm.status = 0;
        }
    }
}