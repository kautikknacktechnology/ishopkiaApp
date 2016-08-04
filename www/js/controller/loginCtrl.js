/* global angular, document, window */
'use strict';

angular.module('ishopkiaApp.loginCtrl', [])

.controller('loginCtrl', ['$scope', '$rootScope', 'dataFactory', '$cordovaToast', '$stateParams', '$state', '$ionicLoading',
    function($scope, $rootScope, dataFactory, $cordovaToast, $stateParams, $state, $ionicLoading) {
        $rootScope.bodylayout = 'user-section';
        $scope.class = "";
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

            $ionicLoading.show({
            	template: 'Checking User Data ...'
        	});
			dataFactory.signUpUser($scope.loginData.name, $scope.loginData.password)
				.success(function(response) {
					console.log(response);
					$ionicLoading.hide();
					//alert("Sign In Successfully....");
					$state.go('app.index');
					$cordovaToast
		        	.show('Sign In Successfully....!', 'long', 'bottom')
		        	.then(function(success) {
		        	    console.log('success login');
		        	});
		        	return;
				})
				.error(function(error) {
					$ionicLoading.hide();
					//alert("Invalid Username or Password.Please Try Again....");
					$cordovaToast
		        	.show('Invalid Username or Password.Please Try Again....!', 'long', 'bottom')
		        	.then(function(success) {
		        	    console.log('success login');
		        	});
		        	return;
				});
        }

        //on button click
        $scope.submitForm = $scope.doLogin;
        //Change Class
    }
])

