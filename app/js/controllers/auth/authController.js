angular
    .module('app')
    .controller('authController', authController);

function authController(){
    var vm = this;


    vm.Hola2 = "Holaaa";
    init();
    //////////
    function init(){
        console.log("Welcome to login");
    }
}