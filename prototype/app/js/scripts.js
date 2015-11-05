app.config( function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      data: {
        requreLogin: false
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      data: {
        requreLogin: false
      }
    })

    .state('map', {
      url: '/map',
      templateUrl: 'views/map.html',
      }
    )

    .state('bookmarks', {
      url: '/bookmarks',
      templateUrl: 'views/bookmarks.html',
      }
    )

    .state('contacts', {
      url: '/contacts',
      templateUrl: 'views/contacts.html',
      }
    )

    .state('group', {
      url: '/group',
      templateUrl: 'views/group.html',
      }
    )

    .state('notifications', {
      url: '/notifcations',
      templateUrl: 'views/notifications.html',
      }
    )

    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.html',
      }
    )
});

    /*      
    Here you can handle controller for specific route as well.
    */
