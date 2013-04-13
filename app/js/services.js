'use strict';

/* Services */

angular.module('quizApp.services.Quiz', ['ngResource']).factory('Quiz', function($resource){
  return $resource('quizzes/:quizId.json', {}, {
    query: {method:'GET', params:{quizId:'quizzes'}, isArray:true}
  });
});

angular.module('quizApp.services.Question', ['ngResource']).factory('Question', function($resource){
  return $resource('quizzes/:quizId/:questionId.json', {}, {
    query: {method:'GET', params:{quizId:'quizzes', questionId:'questions'}, isArray:true}
  });
});

angular.module('quizApp.services.Answers', []).service('AnswerService', function () {
  var answers = [];
  return {
    addAnswer: function (answer) {
      answers.push(answer);
    },
    getAnswerResponse: function () {
        return answers;
    }
  };
});