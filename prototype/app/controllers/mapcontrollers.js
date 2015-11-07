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
		$scope.cards = [{ id: 0, name: "Timothy", age: "22", title: "Chef", gender: "M"}, {id: 1, name: "Jill", title: "Writer", age: "23", gender: "F"}];
	}*/

]);

app.controller('ModalCtrl', function($scope, $uibModal, $log) {
	$scope.animationsEnabled = true;

	$scope.open = function (size) {
		$scope.cards = $scope.cards;

	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'profiledetails.html',
	      controller: 'ModalInstanceCtrl',
	      size: size,
	    });
	}
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

  $scope.ok = function () {
    //$uibModalInstance.close($scope.selected.item);
    //closes the tab
    $uibModalInstance.dismiss('cancel');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

