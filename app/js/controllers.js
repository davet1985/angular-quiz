'use strict';

/* Controllers */

function QuizCtrl($scope, $routeParams, Quiz, AnswerService) {
  $scope.quiz = Quiz.get({quizId: $routeParams.quizId});

  $scope.clearAnswers = AnswerService.clearAnswers();
}

function QuestionCtrl($scope, $routeParams, Quiz, Question, AnswerService) {
  
	$scope.quiz = Quiz.get({quizId: $routeParams.quizId});
  $scope.question = Question.get({quizId: $routeParams.quizId, questionId: $routeParams.questionId});
  $scope.answers = AnswerService.getAnswerResponse();

  $scope.isSelected = function(question, option) {
  	return AnswerService.isSelected(question, option);
  }

  $scope.isAnswered = function(question) {
  	return AnswerService.isAnswered(question);
  }
  
  $scope.addAnswer = function(question, option) {
  	AnswerService.addAnswer(question, option);
  };
  
  $scope.alertAnswers = function() {
    alert(AnswerService.getAnswerResponse());
  };
  
}

function MyCtrl1() {}
MyCtrl1.$inject = [];

function MyCtrl2() {}
MyCtrl2.$inject = [];