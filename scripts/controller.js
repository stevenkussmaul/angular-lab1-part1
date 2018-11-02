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



    vm.addCrazyWord = () => {
        vm.randomWord = vm.words[Math.floor(Math.random()*vm.words.length)];
        vm.randomClasses = vm.classes[Math.floor(Math.random()*vm.phrases.length)];

        vm.textToDisplay.push({
            text: vm.randomWord,
            styling: vm.randomClasses
        });
    }

    vm.addCrazyPhrase = () => {
        vm.randomPhrase = vm.phrases[Math.floor(Math.random()*vm.phrases.length)];
        vm.randomClasses = vm.classes[Math.floor(Math.random()*vm.phrases.length)];

        vm.textToDisplay.push({
            text: vm.randomPhrase,
            styling: vm.randomClasses
        });
    }

}
//getter syntax
// string, then method of controller
angular
    .module("TodoApp")
    .controller("TodoCtrl", TodoCtrl);
