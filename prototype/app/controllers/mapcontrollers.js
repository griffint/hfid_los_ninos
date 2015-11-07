angular.module('single-page-app')
app.controller('mapSidebarCtrl', ["$scope", "$firebaseArray",
	//pass the smallcardsinfo factory into this controller for the sidebar
	function($scope, $firebaseArray) {
		var ref = new Firebase("https://hfid-los-ninos.firebaseio.com/Users")
		$scope.cards = $firebaseArray(ref);
		console.log($ref.cards);
	}
	/*
	function($scope){
		$scope.cards = [{ id: 0, name: "Timothy"}, {id: 1, name: "Jill"}];
	}
	*/
]);