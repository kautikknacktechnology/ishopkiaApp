/* global angular, document, window */
'use strict';

angular.module('ishopkiaApp.controllers', [])

.controller('loginCtrl', ['$scope', '$rootScope', 'dataFactory', '$cordovaToast', function($scope, $rootScope, dataFactory, $cordovaToast){
	$rootScope.bodylayout = 'user-section';
	$scope.loginData = {};
	$scope.doLogin = function(userForm) {
		console.log($scope.loginData);
		// if(!login.$valid){
		// 	$cordovaToast
		// 	.show('Please enter the details!', 'long', 'bottom')
		// 	.then(function(success) {

		// 	    console.log('Error');
		// 	});
		// 	return;
		// }

		dataFactory.sign_in($scope.loginData.name, $scope.loginData.password)
		.success(function(response) {
			console.log(response);
		})
		.error(function(response) {
			console.log("Invalid Username or Password.Please Try Again");
		})
	}

	//on button click
	$scope.submitForm = $scope.doLogin;
}])