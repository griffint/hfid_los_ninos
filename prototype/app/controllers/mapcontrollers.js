angular.module('single-page-app')
app.controller('mapSidebarCtrl', ["$scope", "$firebaseArray",
	//pass the smallcardsinfo factory into this controller for the sidebar
	function($scope, $firebaseArray) {
		var ref = new Firebase("https://hfid-los-ninos.firebaseio.com/Profiles")
		//$scope.cards = $firebaseArray(ref);
	}
]);

/* homes */

app.controller('BerkeleyModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
    $scope.cards = $scope.cards;

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/Berkeleydetails.html',
        controller: 'ModalInstanceCtrl',
        windowClass: 'app-modal-window'
      });
  }
  $scope.click = function() {
    $scope.hide = true;
  }
});
//DO NOT REMOVE THESE---------------------------------
app.controller("MyController", function($scope, $timeout){
    $timeout(callAtTimeout, 1);
});
function callAtTimeout() {
    console.log("Timeout occurred");
	afterTimeout();
}
//---------------------------------------------------
app.controller('FinancialModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
    $scope.cards = $scope.cards;

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/Financialdetails.html',
        controller: 'ModalInstanceCtrl',
        windowClass: 'app-modal-window'
      });
  }
  $scope.click = function() {
    $scope.hide = true;
  }
});

app.controller('NaturalModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
    $scope.cards = $scope.cards;

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/Naturaldetails.html',
        controller: 'ModalInstanceCtrl',
        windowClass: 'app-modal-window'
      });
  }
  $scope.click = function() {
    $scope.hide = true;
  }
});

/*people*/

app.controller('CarlyModalCtrl', function($scope, $uibModal, $log) {
	$scope.animationsEnabled = true;

	$scope.open = function (size) {
		$scope.cards = $scope.cards;

	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'templates/Carlydetails.html',
	      controller: 'ModalInstanceCtrl',
        windowClass: 'app-modal-window'
	    });
	}
  $scope.click = function() {
    $scope.hide = true;
  }
});

app.controller('JaredModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
    $scope.cards = $scope.cards;
		
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/Jareddetails.html',
        controller: 'ModalInstanceCtrl',
        windowClass: 'app-modal-window'
      });
  }
  $scope.click = function() {
    $scope.hide = true;
  }
});

app.controller('BillModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
    $scope.cards = $scope.cards;

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/Billdetails.html',
        controller: 'ModalInstanceCtrl',
        windowClass: 'app-modal-window'
      });
  }
  $scope.click = function() {
    $scope.hide = true;
  }
});

/*groups*/

app.controller('group1ModalCtrl', function($scope, $uibModal, $log) {
  $scope.alert = {};

  $scope.accept = function() {
   $scope.alert.class= 'success';
   $scope.alert.message = 'Congratulations. You are now added to the group. Currently, you are unable to chat with your group.'
   $scope.alertcheck = true;
   $scope.hide = true;
  }

  $scope.reject = function() {
    $scope.alert.class= 'danger';
    $scope.alert.message = 'Okay, sorry to hear that.'
    $scope.alertcheck = true;    
    $scope.hide = true;
  }
});

app.controller('group2ModalCtrl', function($scope, $uibModal, $log) {
  $scope.alert = {};

  $scope.accept = function() {
   $scope.alert.class= 'success';
   $scope.alert.message = 'Congratulations. You are now added to the group. Currently, you are unable to chat with your group.'
   $scope.alertcheck = true;
   $scope.hide = true;
  }

  $scope.reject = function() {
    $scope.alert.class= 'danger';
    $scope.alert.message = 'Okay, sorry to hear that.'
    $scope.alertcheck = true;    
    $scope.hide = true;
  }
});

app.controller('InterestedModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/interestedctrl.html',
        controller: 'ModalInstanceCtrl',
        size: size,
      });
  }
  $scope.click = function() {
    $scope.hide = true;
  }
});

app.controller('GroupModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'groupctrl.html',
        controller: 'ModalInstanceCtrl',
        size: size,
      });
  }
});

app.controller('RegisterModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'registerctrl.html',
        controller: 'ModalInstanceCtrl',
        size: size,
      });
  }
});

app.controller('BadgesModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'badgesctrl.html',
        controller: 'ModalInstanceCtrl',
        size: size,
      });
  }
});

app.controller('PinModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/pinctrl.html',
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

/*
//controller for the home screen that can be viewed after login
//this screen will mainly contain help information for users
app.controller("homeController", ["$scope", "Auth",
  funtion($scope, Auth) {

  }
]);
*/

app.controller("LoginCtrl", ["$scope", "Auth",
  function($scope, Auth) {
    $scope.alert = {};
  	$scope.auth = false; //hack only for prototype

  	$scope.signIn = function () {
      Auth.$authWithPassword({
        email: $scope.email,
        password: $scope.password
      }).then(function(authData) {
      	$scope.auth = true; //hack only for prototype
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
      $scope.alert = {};


      Auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        $scope.alertcheck = true; //hack
        $scope.alert.class= 'success';
        $scope.alert.message = 'You are now be able to find roommates. To better optimize your roommate pairing experience, please update your profile.'
      	$scope.auth = true; //hack only for prototype
        $scope.message = "User created with uid: " + userData.uid;
        var profileObj = {};
        profileObj[userData.uid] = {
        	email: $scope.email
        }
        var profileRef = new Firebase("https://hfid-los-ninos.firebaseio.com/Profiles");
        profileRef.set(profileObj);
        console.log('account made');
      }).catch(function(error) {
        console.log('uh-oh');
        $scope.error = error;
        $scope.alertcheck = true;
        $scope.alert.class = 'danger';
        $scope.alert.message = 'The username and password combination you entered is invalid.'
      });
    };

    $scope.removeUser = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.$removeUser({
        email: $scope.email,
        password: $scope.password
      }).then(function() {
        $scope.alertcheck = false; //hack
      	$scope.auth = false; //hack only for prototype
        $scope.message = "User removed";
      }).catch(function(error) {
        $scope.error = error;
      });

     /*$scope.auth.$onAuth(function(authData){
     	$scope.authData = authData;
     })
*/
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
