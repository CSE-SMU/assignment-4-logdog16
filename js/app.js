var app = angular.module('toDoApp', []);
app
  .controller('ToDoController', ['$scope', function ($scope) {
	$scope.tasks = [];
	$scope.editIndex = false;
	$scope.addTask = function () {
    if( $scope.task != "" && $scope.description != "")
    {
      if( $scope.editIndex === false){
  			$scope.tasks.push({task: $scope.task, description: $scope.description, date: $scope.date, done: false})
  		} else {
  			$scope.tasks[$scope.editIndex].task = $scope.task;
        $scope.tasks[$scope.editIndex].description = $scope.description;
        $scope.tasks[$scope.editIndex].date = $scope.date;
  		}
  		$scope.editIndex = false;
  		$scope.task = '';
      $scope.description = '';
      $scope.date = '';
    }
	}

	$scope.editTask = function (index) {
	  $scope.task = $scope.tasks[index].task;
	  $scope.editIndex = index;
	}
	$scope.doneTask = function (index) {
	  $scope.tasks[index].done = true;
	}
	$scope.unDoneTask = function (index) {
	  $scope.tasks[index].done = false;
	}
	$scope.deleteTask = function (index) {
	  $scope.tasks.splice(index, 1);
	}
  }])
