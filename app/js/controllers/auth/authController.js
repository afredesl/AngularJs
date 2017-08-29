angular
    .module('app')
    .controller('authController', authController);

function authController($state){
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
                $state.go('app.dashboard');
        }else{
            vm.status = 0;
        }
    }
}