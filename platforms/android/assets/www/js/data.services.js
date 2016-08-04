/* global angular, document, window */
'use strict';

angular.module('ishopkiaApp.services', ['ishopkiaApp.config'])

.factory('dataFactory', function ($http, Config) {
	
	return {
		signUpUser :function(user, password){
			return $http.get(Config.BASE_URL +'sign_in.php?uinfo='+ user +'&pass='+ password);
		},
		homePage :function(){
			return $http.get(Config.BASE_URL +'slider.php');
		},
		signUpUser :function(uname, fname, email, pass, mobile, city, state, pincode ){
			return $http.get(Config.BASE_URL +'sign_up.php?uname='+ uname +'&fname='+ fname +'&email='+ email +'&pass='+ pass 
				+'&mobile='+ mobile +'&city='+ city +'&state='+ state +'&pincode='+ pincode)
		}
	};	
})	
