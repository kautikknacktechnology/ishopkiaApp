/* global angular, document, window */
'use strict';

angular.module('ishopkiaApp.directives', [])

.directive('slider', ['$rootScope',
    function($rootScope) {
        return {
            restrict: 'A',
            replace: true, // replace original markup with template 
         	transclude: false, // not to copy original HTML DOM
            link: function(scope, iElement, attrs) {
                //attrs references any attributes on the directive element in html

                //iElement is the actual DOM element of the directive,
                //so you can bind to it with jQuery
                $("#slider-banner").owlCarousel({
                    navigation: false, // Show next and prev buttons
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    singleItem: true,
                    autoPlay: true
                })
            }
        };
    }
])

.directive('recentslider', ['$rootScope',
    function($rootScope) {
        return {
            restrict: 'A',
            replace: true, // replace original markup with template 
            transclude: false, // not to copy original HTML DOM
            link: function(scope, iElement, attrs) {
                //attrs references any attributes on the directive element in html

                //iElement is the actual DOM element of the directive,
                //so you can bind to it with jQuery
				$("#recentAdd-slider").owlCarousel({
					autoPlay: 3000,
					pagination: false,
					items: 3,
					itemsTablet: [768, 3],
					itemsMobile: [479, 2]
				});
            }
        };
    }
])



.directive('search', ['$rootScope',
    function($rootScope) {
        return {
            restrict: 'EA',
            link: function(scope, iElement, attrs) {
                //attrs references any attributes on the directive element in html

                //iElement is the actual DOM element of the directive,
                //so you can bind to it with jQuery
                   // Handle click on toggle search button
	            $('#toggle-search').click(function () {
	                $('#search-form, #toggle-search').toggleClass('open');
	                return false;
	            });
	            // Handle click on search submit button
	            $('#search-form input[type=submit]').click(function () {
	                $('#search-form, #toggle-search').toggleClass('open');
	                return true;
	            });
	            // Clicking outside the search form closes it
	            $(document).click(function (event) {
	                var target = $(event.target);
	                if (!target.is('#toggle-search') && !target.closest('#search-form').size()) {
	                    $('#search-form, #toggle-search').removeClass('open');
	                }
	            });
            }
        };
    }
])

.directive('mmenu', ['$rootScope',
    function($rootScope) {
        return {
		restrict : 'A',
		link : function(scope, element, attrs) {
            $(element).mmenu({});
		}
	};
    }
]);