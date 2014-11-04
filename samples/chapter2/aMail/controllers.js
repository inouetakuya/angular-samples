// Create a module for our core AMail services
var aMailServices = angular.module('AMail', ['ngRoute']);

// Set up our mappings between URLs, templates, and controllers
function emailRouteConfig($routeProvider) {
  $routeProvider.
    when('/', {
      controller: ListController,
      templateUrl: 'list.html'
    }).
// Notice that for the detail view, we specify a parameterized URL component
// by placing a colon in front of the id
    when('/view/:id', {
      controller: DetailController,
      templateUrl: 'detail.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}

// Set up our route so the AMail service can find it
aMailServices.config(emailRouteConfig);

// Some fake emails
var messages = [{
  id: 0, sender: 'jean@somecompany.com', subject: 'ご無沙汰しております',
  date: '2013/12/7 12:32:00', recipients: ['greg@somecompany.com'],
  message: '昼食をご一緒させてください。'
    +'今年は共同作業できそうな案件がたくさんあります。'
}, {
  id: 1, sender: 'maria@somecompany.com',
  subject: '私のノートPCはどこですか?',
  date: '2013/12/7 8:15:12', recipients: ['greg@somecompany.com'],
  message: '私の席の引き出しに返してくれたのだと思っていましたが、'
    +'見当たりません。'
}, {
  id: 2, sender: 'bill@somecompany.com', subject: 'パイソンを探しています',
  date: '2013/12/6 20:35:02', recipients: ['greg@somecompany.com'],
  message: 'すみません、ペットのパイソンがかごから逃げ出してしまいました。'
    +'すばしっこい方ではないので、見かけたら教えてください。'
}];

// Publish our messages for the list template
function ListController($scope) {
  $scope.messages = messages;
}

// Get the message id from the route (parsed from the URL) and use it to
// find the right message object.
function DetailController($scope, $routeParams) {
  $scope.message = messages[$routeParams.id];
}
