/* global angular, document, window */
'use strict';

angular.module('ishopkiaApp.controllers', [])

.controller('loginCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
	$rootScope.bodylayout = 'user-section';
}])