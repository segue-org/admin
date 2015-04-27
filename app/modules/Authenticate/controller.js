(function() {
  "use string";

  angular
    .module("segue.admin.authenticate",[
      "segue.admin",
      "segue.admin.authenticate.controller",
      "segue.admin.authenticate.service",
    ])
    .config(function($stateProvider) {
      $stateProvider
        .state('authenticate', {
          url: '^/authenticate',
          views: {
            "header": { templateUrl: 'modules/common/nav.html' },
            "main":   { controller: 'LoginController',  templateUrl: 'modules/Authenticate/login.html' },
          },
        });
    });

  angular
    .module("segue.admin.authenticate.controller", [
      "segue.admin.authenticate.service",
    ])
    .controller("LoginController", function($scope, $state, Auth, focusOn) {
      $scope.login = {};

      function succeed(credentials) {
        $scope.home();
      }
      $scope.tryLogin = function() {
        Auth.login($scope.login.email, $scope.login.password).then(succeed);
      };

      focusOn('login.email');
    });
})();
