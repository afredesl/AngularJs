angular
    .module('app')
    .controller('authController', authController);

function authController(){
    var vm = this;



    activate();
    //////////
    function activate(){
        console.log("Welcome to login");
    }
}