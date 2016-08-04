/* global angular, document, window */
'use strict';

angular.module('ishopkiaApp.indexCtrl', [])


.controller('indexCtrl', ['$scope', '$rootScope', 'dataFactory', '$cordovaToast', 
	function($scope, $rootScope, dataFactory, $cordovaToast){
		dataFactory.homePage()
			.success(function(response) {
				console.log(response.Data);
				$scope.mainSliders = response.Data;
			})
			.error(function(error) {
				console.log(error);
			})

}])
