app.config( function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('about', {
      url: '/about',
      templateUrl: 'about.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('map', {
      url: '/map',
      templateUrl: 'map.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('bookmarks', {
      url: '/bookmarks',
      templateUrl: 'bookmarks.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('group', {
      url: '/group',
      templateUrl: 'group.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('notifications', {
      url: '/notifcations',
      templateUrl: 'notifications.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'profile.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

});

    /*      
    Here you can handle controller for specific route as well.
    */
