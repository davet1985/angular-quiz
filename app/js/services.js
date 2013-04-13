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
  var answers = new Array();
  return {
    addAnswer: function (question, answer) {
    	answers[question] = answer;
    },
    getAnswerResponse: function () {
      return answers;
    },
    isAnswered: function(question) {
    	return question in answers;
    },
    isSelected: function (question, answer) {
    	if (!(question in answers)) {
    		return false;
    	}
    	return answer.option == answers[question].option;
    }
  };
});