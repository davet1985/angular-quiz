'use strict';

// Declare app level module which depends on filters, and services
angular.module('quizApp', ['quizApp.filters', 'quizApp.services.Quiz', 'quizApp.services.Question', 'quizApp.directives']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/quizzes/:quizId', {templateUrl: 'partials/quiz.html', controller: QuizCtrl});
    $routeProvider.when('/quizzes/:quizId/:questionId', {templateUrl: 'partials/question.html', controller: QuestionCtrl});
    $routeProvider.otherwise({redirectTo: '/quizzes/quiz1'});

  }]);



