angular
    .module('app')
    .controller('modalController', modalController);


function modalController(){

    var vm = this;

    vm.mensaje = "Hola modal";
    init();

    function init(){
        console.log('Welcome to modal');
    }
}