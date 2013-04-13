'use strict';

/* Controllers */

function QuizCtrl($scope, $routeParams, Quiz) {
  $scope.quiz = Quiz.get({quizId: $routeParams.quizId});
}

function QuestionCtrl($scope, $routeParams, Quiz, Question, AnswerService) {
  
	$scope.quiz = Quiz.get({quizId: $routeParams.quizId});
  $scope.question = Question.get({quizId: $routeParams.quizId, questionId: $routeParams.questionId});
  $scope.answers = AnswerService.getAnswerResponse();
  
  $scope.addAnswer = function(a) {
     AnswerService.addAnswer(a);
  };
  
  $scope.alertAnswers = function() {
    alert(AnswerService.getAnswerResponse());
  };
  
}

function MyCtrl1() {}
MyCtrl1.$inject = [];

function MyCtrl2() {}
MyCtrl2.$inject = [];