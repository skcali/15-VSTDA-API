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

	// Function to add the todos when clicked
	vm.addTodo = function() {
		todoFactory.create({
			"todoName": vm.todoName,
			"priority": vm.priority
		})
		.then(function(data) {
			vm.todos.push(data);
		})
}
	// Functions to set order when order buttons are pushed
	vm.byHigh = function() {
		vm.order="1";
	}
	vm.byLow = function() {
		vm.order="-1";
	}
	vm.byAlphabet = function() {
		vm.order="0";
	}

};
