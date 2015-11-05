angular.module('single-page-app')
app.controller('mapSidebarCtrl', ["$scope", "$firebaseArray",
	//pass the smallcardsinfo factory into this controller for the sidebar
	function($scope, $firebaseArray) {
		var smallCardsRef = new Firebase("https://hfid-los-ninos.firebaseio.com/Users/")
		$scope.cards = $firebaseArray(smallCardsRef);
		console.log($scope.cards[0]);
	}
]);