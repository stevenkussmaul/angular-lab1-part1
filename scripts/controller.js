"use strict";

function TodoCtrl() {
    const vm = this;  // vm stants for ViewModel

    vm.todoItemsArray = [
        {
            task: "walk the dog",
            completed: false
        },
        {
            task: "feed the chickens",
            completed: true
        },
        {
            task: "buy a baseball bat",
            completed: false
        },
        {
            task: "change my oil",
            completed: true
        }
    ];

}
//getter syntax
// string, then method of controller
angular
    .module("TodoApp")
    .controller("TodoCtrl", TodoCtrl);
