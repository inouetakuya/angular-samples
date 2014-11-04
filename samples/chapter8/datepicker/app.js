var app = angular.module('myApp', ['myApp.directives']);

app.controller('MainCtrl', function($scope) {
  $scope.myText = '選択されていません';
  $scope.currentDate = '';
  $scope.updateMyText = function(date) {
    $scope.myText = '選択されました';
  };
});
