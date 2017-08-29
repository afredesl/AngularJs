angular
    .module('app')
    .controller('homeController', homeController);

function homeController(){
    var vm = this;

    vm.welcome = 'Bienvenidos al Home';

    init();
    function init(){

    }
}