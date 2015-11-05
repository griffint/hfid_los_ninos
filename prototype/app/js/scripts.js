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
      //we can use the below to have multiple views on the same page
      views: {
        '': {templateUrl: 'templates/map.html'},
        'sidebar@map': {
          templateUrl: 'partials/map_sidebar.html',
          controller: 'mapSidebarCtrl'
        }
      }
   
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
