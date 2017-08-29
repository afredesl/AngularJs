angular
    .module('app')
    .controller('loginController', loginController);

function loginController(){

    var vm = this;

    vm.Hola = 'Bienvenido a angularjs';
    init();

    function init(){
        console.log("Bienvenido a NavBar");
    }
}