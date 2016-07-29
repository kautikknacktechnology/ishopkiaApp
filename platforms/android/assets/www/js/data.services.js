/* global angular, document, window */
'use strict';

angular.module('ishopkiaApp.services', ['ishopkiaApp.config'])

.factory('dataFactory', function ($http, Config) {
	
	return {
		sign_in :function(user, password){
			return $http.get(Config.BASE_URL +'sign_in.php?uinfo='+ user +'&pass=' + password);
		},
	};
})	