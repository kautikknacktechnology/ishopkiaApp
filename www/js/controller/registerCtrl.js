/* global angular, document, window */
'use strict';

angular.module('ishopkiaApp.registerCtrl', [])


.controller('registerCtrl', ['$scope', '$rootScope', 'dataFactory', '$cordovaToast',
    function($scope, $rootScope, dataFactory, $cordovaToast) {
    	$rootScope.bodylayout = 'user-section';
    	$scope.signupData = {};
    	$scope.doSignup = function(userForm) {
    		console.log($scope.signupData);
    		dataFactory.signUpUser($scope.signupData.uname, $scope.signupData.fname, $scope.signupData.email, 
    							   $scope.signupData.pass, $scope.signupData.mobile, $scope.signupData.city, 
    							   $scope.signupData.state, $scope.signupData.pincode)
    		.success(function(response){
    			console.log(response);
				$cordovaToast
				.show('Sign Up Successfully....!', 'long', 'bottom')
				.then(function(success) {
					console.log('success login');
				});
				return;
    		})
    		.error(function(error){
    			console.log(error);
				$cordovaToast
				.show('E-mail Address & Mobile No. Already Register....!', 'long', 'bottom')
				.then(function(success) {
					console.log('success login');
				});
				return;
    		})
    	}

    	//on button click
        $scope.submitForm = $scope.doSignup;
    }
])

