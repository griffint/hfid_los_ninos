app.config( function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/home',
      templateUrl: 'templates/home.html',
      data: {
        requreLogin: false
      }
    })

    .state('map', {
      url: '/map',
      //we can use the below to have multiple views on the same page
      views: {
        '': {templateUrl: 'templates/map.html'},
        'sidebar@map': {
          templateUrl: 'partials/map.cards.html',
          controller: 'mapSidebarCtrl'
        }
      }
   
    })

    .state('map.cards', {
      url: '/cards',
      templateUrl: 'partials/map.cards.html'
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
