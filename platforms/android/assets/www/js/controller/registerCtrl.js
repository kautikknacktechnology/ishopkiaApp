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
    		})
    		.error(function(error){
    			console.log(error);
    		})
    	}

    	//on button click
        $scope.submitForm = $scope.doSignup;
    }
])

