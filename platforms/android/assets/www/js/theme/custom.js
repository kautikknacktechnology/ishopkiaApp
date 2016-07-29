$(document).ready(function () {
    $("#menu").mmenu({
            offCanvas: {
                //zposition: "front"
            },
            extensions: ["theme-white", "border-none", "effect-listitems-slide", "pagedim-black"],
            navbar: {
                title: "Shop For"
            }
            //navbar: false
            //slidingSubmenus: false
        });
    $("#slider-banner").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: true
        });
    $("#recentAdd-slider").owlCarousel({
            autoPlay: 3000,
            pagination: false,
            items: 3,
            itemsTablet: [768, 3],
            itemsMobile: [479, 2]
        });
	 $(".recent-products").owlCarousel({
            autoPlay: true,
            pagination: false,
			navigation: false,
            items: 3,
            itemsTablet: [768, 3],
            itemsMobile: [479, 2]
        });
    $('.product-holder').matchHeight();
	
	 if ($().selectpicker) {
        $('.selectpicker').selectpicker();
    }
	
	// Product Detail Slider
	
	var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:true,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    items : 3,
    itemsTablet       : [768,3],
    itemsMobile       : [479,3],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }
	
    (function ($) {
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
        })(jQuery); 
		
	 // Google map
    // ---------------------------------------------------------------------------------------
    if (typeof google === 'object' && typeof google.maps === 'object') {
        if ($('#map-canvas').length) {
            var map;
            var marker;
            var image = 'images/iconmap.png'; // marker icon
            google.maps.event.addDomListener(window, 'load', function () {
                var mapOptions = {
                    scrollwheel: false,
                    zoom: 16,
                    center: new google.maps.LatLng(21.1714884,72.8109102) // map coordinates
                };

                map = new google.maps.Map(document.getElementById('map-canvas'),
                    mapOptions);
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(21.1714884,72.8109102), // marker coordinates
                    map: map,
                    icon: image,
                    title: '6th Floor-607/08,Abhinandan Royale Complex,Bhatar Road, Surat-395007, Gujarat, India.'
                });
            });
        }
    } 
});