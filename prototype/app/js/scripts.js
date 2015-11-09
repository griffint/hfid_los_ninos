app.config( function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'templates/home_template.html',
    })

    .state('map', {
      url: '/map',
      //we can use the below to have multiple views on the same page
      views: {
        '': {templateUrl: 'templates/map.html'}}/*,
        'sidebar@map': {
          templateUrl: 'partials/map.cards.html',
          controller: 'mapSidebarCtrl'
        }*/
   
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

    .state('contacted', {
      url: '/contacted',
      templateUrl: 'templates/contacted.html',
      }
    )

    .state('groups', {
      url: '/groups',
      templateUrl: 'templates/groups.html',
      }
    )

    .state('notifications', {
      url: '/notifcations',
      templateUrl: 'templates/notifications.html',
      }
    )

    .state('basic-profile', {
      url: '/basic-profile',
      templateUrl: 'templates/basic-profile.html',
      }
    )
    .state('advanced-profile', {
      url: '/advanced-profile',
      templateUrl: 'templates/advanced-profile.html',
      }
    )
});
    /*      
    Here you can handle controller for specific route as well.
    */
