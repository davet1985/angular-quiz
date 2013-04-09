'use strict';

/* Controllers */

function QuizCtrl($scope, $routeParams, Quiz) {
	//$scope.quiz = Quiz.query();
	$scope.var1 = 'hello';

  $scope.quiz = Quiz.get({quizId: $routeParams.quizId});

}

function QuestionCtrl($scope, $routeParams, Quiz, Question) {

	$scope.quiz = Quiz.get({quizId: $routeParams.quizId});
	$scope.question = Question.get({quizId: $routeParams.quizId, questionId: $routeParams.questionId});

}


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
