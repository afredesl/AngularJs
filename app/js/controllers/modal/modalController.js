angular
    .module('app')
    .controller('modalController', modalController);


function modalController(){

    var vm = this;

    vm.mensaje = "Hola modal";
    vm.user = {
        title : '',
        email : ''
    }
    vm.saveDialog = saveDialog;

    init();

    function init(){
        console.log('Welcome to modal');
    }

    function saveDialog(){
        vm.user.date_end = moment(vm.user.date_end).format('YYYY-MM-DD');
        console.log(vm.user);

    }
}