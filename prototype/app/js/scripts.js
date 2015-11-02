app.config( function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
        console.log($scope.test);
      }
    })

    .state('about', {
      url: '/about',
      templateUrl: 'about.html',
      controller: function($scope) {
        $scope.test = ['a123','b456','c789'];
      }
    });

});

    /*      
    Here you can handle controller for specific route as well.
    */
