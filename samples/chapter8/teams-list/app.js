var app = angular.module('myApp', ['myApp.services']);

app.controller('ListCtrl', function($scope, filterService) {
  $scope.filterService = filterService;
  $scope.teamsList = [
    {id: 1, name: 'ダラス・マーべリックス', sport: 'バスケットボール', city: 'ダラス', featured: true},
    {id: 2, name: 'ダラス・カウボーイズ', sport: 'フットボール', city: 'ダラス', featured: false},
    {id: 3, name: 'ニューヨーク・ニックス', sport: 'バスケットボール', city: 'ニューヨーク', featured: false},
    {id: 4, name: 'ブルックリン・ネッツ', sport: 'バスケットボール', city: 'ニューヨーク', featured: false},
    {id: 5, name: 'ニューヨーク・ジェッツ', sport: 'フットボール', city: 'ニューヨーク', featured: false},
    {id: 6, name: 'ニューヨーク・ジャイアンツ', sport: 'フットボール', city: 'ニューヨーク', featured: true},
    {id: 7, name: 'ロサンゼルス・レイカーズ', sport: 'バスケットボール', city: 'ロサンゼルス', featured: true},
    {id: 8, name: 'ロサンゼルス・クリッパーズ', sport: 'バスケットボール', city: 'ロサンゼルス', featured: false},
    {id: 9, name: 'ダラス・スターズ', sport: 'ホッケー', city: 'ダラス', featured: false},
    {id: 10, name: 'ボストン・ブルーインズ', sport: 'ホッケー', city: 'ボストン', featured: true}
  ];
});

app.controller('FilterCtrl', function($scope, filterService) {
  $scope.filterService = filterService;
});
