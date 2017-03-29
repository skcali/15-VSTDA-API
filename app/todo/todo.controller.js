angular.module('app', []);

angular
    .module('app')
    .controller('TodoController', TodoController);

TodoController.$inject = ['todoFactory'];

function TodoController(todoFactory) {

    var vm = this;

    // Place holders to push information gathered from user
    vm.order = "";
    vm.todos = [];

    // Array of options with their priority value and styling
    vm.priorities = [
        ["High", 1, "list-group-item list-group-item-danger"],
        ["Medium", 2, "list-group-item list-group-item-warning"],
        ["Low", 3, "list-group-item list-group-item-success"]
    ];

    activate();
    // Function to add the todos when clicked
    vm.addTodo = function() {
        todoFactory
            .create({
                "todoName": vm.todoName,
                "priority": vm.priority[1],
                "style": vm.priority[2]
            })
            .then(function(data) {
                vm.todos.push(data);
            });
    }

    vm.deleteTodo = function(todo) {
        todoFactory
            .remove(todo.todoItemId)
            .then(function(response) {
                vm.todos.splice(vm.todos.indexOf(todo), 1);
            });

    }
    // Functions to set order when order buttons are pushed
    vm.byHigh = function() {
        vm.order = "priority";
    }
    vm.byLow = function() {
        vm.order = "-priority";
    }
    vm.byAlphabet = function() {
        vm.order = "todoName";
    }

    function activate() {
        todoFactory
            .getAll()
            .then(function(data) {
                vm.todos = data;
            });
    }

};
