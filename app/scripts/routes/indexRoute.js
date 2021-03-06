app.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          'menu': {
            templateUrl: 'app/views/modules/menu.html'
          },
          'main': {
            templateUrl: 'app/views/modules/main.html',
            controller: 'indexController'
          },
          'girls': {
            templateUrl: 'app/views/modules/girls.html'
          },
          'footer':{
            templateUrl: 'app/views/modules/footer.html'
          }
        },
      });
    $urlRouterProvider.otherwise('/');
  }
]);