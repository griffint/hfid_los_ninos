app.config( function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('/map', {
      url: '/map',
      templateUrl: 'views/map.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('bookmarks', {
      url: '/bookmarks',
      templateUrl: 'views/bookmarks.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('contacts', {
      url: '/contacts',
      templateUrl: 'views/contacts.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('group', {
      url: '/group',
      templateUrl: 'views/group.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('notifications', {
      url: '/notifcations',
      templateUrl: 'views/notifications.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    })

});

    /*      
    Here you can handle controller for specific route as well.
    */
