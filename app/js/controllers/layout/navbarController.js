angular
    .module('app')
    .controller('navbarController', navbarController);

function navbarController(){

    var vm = this;

    vm.init = init;

    function init(){
        console.log("Bienvenido a NavBar");
    }
}