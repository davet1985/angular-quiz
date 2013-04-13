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
    getAnswers: function () {
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
    },
    clearAnswers: function () {
    	answers = new Array();
    },
    getCorrectAnswers: function () {
    	var correct = [];
    	for (var i in answers) {
    		if (answers[i].correct) {
    			correct.push(answers[i].text);	
    		}
    	};
    	return correct;
    },
    getIncorrectAnswers: function () {
    	var incorrect =[];
    	for (var i in answers) {
    		if (!answers[i].correct) {
    			incorrect.push(answers[i].text);	
    		}
    	};
    	return incorrect;
    }
  };
});