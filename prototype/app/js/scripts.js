app.config( function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      data: {
        requreLogin: false
      }
    })

    /*.state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      data: {
        requreLogin: false
      }
    })*/

    .state('map', {
      url: '/map',
      templateUrl: 'templates/map.html',
      controller: function($scope){
        $scope.cards = [{ id: 0, name: "Timothy"}, {id: 1, name: "Jill"}];
      }
    })

    .state('map.sidebar', {
      url:'/sidebar',
      templateUrl: 
    })

    .state('bookmarks', {
      url: '/bookmarks',
      templateUrl: 'templates/bookmarks.html',
      }
    )

    .state('contacts', {
      url: '/contacts',
      templateUrl: 'templates/contacts.html',
      }
    )

    .state('group', {
      url: '/group',
      templateUrl: 'templates/group.html',
      }
    )

    .state('notifications', {
      url: '/notifcations',
      templateUrl: 'templates/notifications.html',
      }
    )

    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      }
    )
});

    /*      
    Here you can handle controller for specific route as well.
    */
