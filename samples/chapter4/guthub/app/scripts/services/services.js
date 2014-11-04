'use strict';

var services = angular.module('guthub.services',
  ['ngResource']);

services.factory('Recipe', ['$resource',
  function ($resource) {
    return $resource('/recipes/:id', {id: '@id'});
  }]);

services.factory('MultiRecipeLoader', ['Recipe', '$q',
  function (Recipe, $q) {
    return function () {
      var delay = $q.defer();
      Recipe.query(function (recipes) {
        delay.resolve(recipes);
      }, function () {
        delay.reject('レシピの取得に失敗しました');
      });
      return delay.promise;
    };
  }]);

services.factory('RecipeLoader', ['Recipe', '$route', '$q',
  function (Recipe, $route, $q) {
    return function () {
      // $q は promise オブジェクト
      var delay = $q.defer();

      Recipe.get({id: $route.current.params.recipeId}, function (recipe) {

        // サーバーがレスポンスを返したら promise オブジェクトに実際のオブジェクトをセットする
        delay.resolve(recipe); // 約束が達成され、成功時のコールバックが実行される

      }, function () {
        // rejext で約束が破棄され、エラーハンドラが実行される
        delay.reject('レシピの取得に失敗しました: ' + $route.current.params.recipeId);
      });
      return delay.promise;
    };
  }]);
