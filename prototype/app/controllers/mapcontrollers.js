angular.module('single-page-app')
app.controller('mapSidebarCtrl', ["$scope", "$firebaseArray",
	//pass the smallcardsinfo factory into this controller for the sidebar
	function($scope, $firebaseArray) {
		var ref = new Firebase("https://hfid-los-ninos.firebaseio.com/Profiles")
		//$scope.cards = $firebaseArray(ref);
		$scope.cards = [{ id: 0, name: "Timothy", age: "22", title: "Chef", gender: "M"}, {id: 1, name: "Jill", title: "Writer", age: "23", gender: "F"}];
		//console.log($ref.cards);
	}
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

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://hfid-los-ninos.firebaseio.com/");
    return $firebaseAuth(ref);
  }
]);

app.controller("LoginCtrl", ["$scope", "Auth",
  function($scope, Auth) {
  	$scope.auth = null;


  	$scope.signIn = function () {
      Auth.$authWithPassword({
        email: $scope.email,
        password: $scope.password
      }).then(function(authData) {
        console.log("Logged in as", authData.uid);//Auth.alert.message = '';
      }).catch(function(error) {
        if (error = 'INVALID_EMAIL') {
          console.log('email invalid or not signed up — trying to sign you up!');
          $scope.createUser();
        } else if (error = 'INVALID_PASSWORD') {
          console.log('wrong password!');
        } else {
          console.log(error);
        }
      });
    }

    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
        var profileObj = {};
        profileObj[userData.uid] = {
        	email: $scope.email
        }
        var profileRef = new Firebase("https://hfid-los-ninos.firebaseio.com/Profiles");
        profileRef.set(profileObj);
      }).catch(function(error) {
        $scope.error = error;
      });
    };

    $scope.removeUser = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.$removeUser({
        email: $scope.email,
        password: $scope.password
      }).then(function() {
        $scope.message = "User removed";
      }).catch(function(error) {
        $scope.error = error;
      });

     $scope.auth.$onAuth(function(authData){
     	$scope.authData = authData;
     })
    };
  }
]);

/*app.factory("Profile", ["$scope","$firebaseObject",
	function($scope, $firebaseObject, $firebaseAuth) {
	return function(userid){
		var ref = new Firebase("https://hfid-los-ninos.firebaseio.com/Profiles");
		var profileRef = ref.child(userid);
		return $firebaseObject(profileRef)
	}
	}
]);*/

app.controller("BasicCtrl", ["$scope", "Auth",
  function($scope, Auth) {
    // create a three-way binding to our Profile as $scope.profile
    var ref = new Firebase("https://hfid-los-ninos.firebaseio.com/Profiles")
    var profileRef = ref.child(Auth.uid);
    var profileObj = {};

    profileRef.update({
    	name: 'Griff',
    	age: '19',
    });
    //Profile(Auth.uid).$bindTo($scope, "profile");
  }
]);

/*app.controller('AuthCtrl', [
  '$scope', '$rootScope', '$firebaseAuth', function($scope, $rootScope, $firebaseAuth) {
    var ref = new Firebase('https://hfid-los-ninos.firebaseio.com/');
    $rootScope.auth = $firebaseAuth(ref);
    
    $scope.signIn = function () {
      $rootScope.auth.$login('password', {
        email: $scope.email,
        password: $scope.password
      }).then(function(user) {
        $rootScope.alert.message = '';
      }, function(error) {
        if (error = 'INVALID_EMAIL') {
          console.log('email invalid or not signed up — trying to sign you up!');
          $scope.signUp();
        } else if (error = 'INVALID_PASSWORD') {
          console.log('wrong password!');
        } else {
          console.log(error);
        }
      });
    }

    $scope.signUp = function() {
      $rootScope.auth.$createUser($scope.email, $scope.password, function(error, user) {
        if (!error) {
          $rootScope.alert.message = '';
        } else {
          $rootScope.alert.class = 'danger';
          $rootScope.alert.message = 'The username and password combination you entered is invalid.';
        }
      });
    }
  }
]);

app.controller('AlertCtrl', [
  '$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.alert = {};
  }
]);*/
