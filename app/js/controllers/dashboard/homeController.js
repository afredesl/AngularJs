angular
    .module('app')
    .controller('homeController', homeController);

function homeController($mdDialog){
    var vm = this;

    vm.welcome = 'Bienvenidos al Home';

    vm.openModal = openModal;
    init();
    function init(){

    }

    function openModal(){
        $mdDialog.show({
            controller: modalController,
            controllerAs: 'vm',
            templateUrl: 'views/modal/modal.tpl.html',
            clickOutsideToClose:true
        })
    }
}