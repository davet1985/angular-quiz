'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

//angular.module('quizApp.services', []).
//  value('version', '0.1');


angular.module('quizApp.services.Quiz', ['ngResource']).
    factory('Quiz', function($resource){
  return $resource('quizzes/:quizId.json', {}, {
    query: {method:'GET', params:{quizId:'quizzes'}, isArray:true}
  });
});


angular.module('quizApp.services.Question', ['ngResource']).
    factory('Question', function($resource){
  return $resource('quizzes/:quizId/:questionId.json', {}, {
    query: {method:'GET', params:{quizId:'quizzes', questionId:'questions'}, isArray:true}
  });
});
