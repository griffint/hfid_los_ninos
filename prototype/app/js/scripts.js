app.config( function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      views: {
        /*'nav': {
          templateUrl: 'templates/nav.html'
        },*/
        'body': {
          templateUrl: 'templates/home_template.html'
        }
      }
      ,
    })

    .state('map', {
      url: '/map',
      views: {
        'nav': {
          templateUrl: 'templates/nav.html'
        },
        'body': {templateUrl: 'templates/map.html'}
        }/*,
        'sidebar@map': {
          templateUrl: 'partials/map.cards.html',
          controller: 'mapSidebarCtrl'
        }*/
   
    })

    .state('map.cards', {
      url: '/cards',
      views: {
        'nav': {
          templateUrl: 'templates/nav.html'
        },
        'body': {templateUrl: 'partials/map.cards.html'}
      }
      
    })

    .state('bookmarks', {
      url: '/bookmarks',
      views: {
        'nav': {
          templateUrl: 'templates/nav.html'
        },
        'body': {templateUrl: 'templates/bookmarks.html'}
      }
    })

    .state('contacted', {
      url: '/contacted',
      views: {
        'nav': {
          templateUrl: 'templates/nav.html'
        },
        'body': {      
          templateUrl: 'templates/contacted.html'}
      }
    })

    .state('groups', {
      url: '/groups',
      views: {
        'nav': {
          templateUrl: 'templates/nav.html'
        },
        'body': {      
          templateUrl: 'templates/groups.html'}
       }
    })

    .state('notifications', {
      url: '/notifcations',
      views: {
        'nav': {
          templateUrl: 'templates/nav.html'
        },
        'body': {      
          templateUrl: 'templates/notifications.html'}
        }
    })

    .state('basic-profile', {
      url: '/basic-profile',
      views: {
        'nav': {
          templateUrl: 'templates/nav.html'
        },
        'body': { templateUrl: 'templates/basic-profile.html'}
      }
    })

    .state('advanced-profile', {
      url: '/advanced-profile',
      views: {
        'nav': {
          templateUrl: 'templates/nav.html'
        },
        'body': {      
          templateUrl: 'templates/advanced-profile.html'}
      }
    })
});
    /*      
    Here you can handle controller for specific route as well.
    */
