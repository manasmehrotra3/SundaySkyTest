var sampleApp = angular.module('test', ['ngRoute']);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/secondPage', {
    templateUrl: 'secondPage.html'
      }).
      when('/', {
    templateUrl: 'firstPage.html',
    controller: 'controller'
      });
}]);

sampleApp.controller('controller', function($scope) {
    var sskyPageSegments = ({ 'page': 'test'});
    var sskyUserSegments = ({ 'userid': 'anthem', 'source': 'sms'});
    sundaySky.create('http://clips.vorwaerts-gmbh.de/VfE_html5.mp4', {autoStart: true});
    window.sundaySky = sundaySky.create('http://clips.vorwaerts-gmbh.de/VfE_html5.mp4', {autoStart: true});
});