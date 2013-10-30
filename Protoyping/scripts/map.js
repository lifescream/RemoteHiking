/* global document */
jQuery(document).ready(function(){

	/***
	Adding Google Map.
	***/

	/* Calling goMap() function, initializing map and adding markers. */
	jQuery('#map').goMap({
		maptype: 'SATELLITE',
        latitude: 40.760651, 
        longitude: -73.930635, 
        zoom: 13,
        scaleControl: true,
        scrollwheel: false,        
		markers: [
			{
			    latitude: 67.791740, longitude: 18.654739, group: 'airport', icon: 'images/marker-airport.png', html: {
				content: 'Lorem ipsum dolor sit amet.<br /><a href="company-page.html">Read More</a>'
			}},
			{
			    latitude: 67.771408, longitude: 18.554110, group: 'airport', icon: 'images/marker-airport.png', html: {
				content: 'Lorem ipsum dolor sit amet.<br /><a href="company-page.html">Read More</a>'
			}},
			{
			    latitude: 67.778610, longitude: 18.481581, group: 'airport', icon: 'images/marker-airport.png', html: {
				content: 'Lorem ipsum dolor sit amet.<br /><a href="company-page.html">Read More</a>'
			}},
			{
			    latitude: 67.829353, longitude: 18.401260, group: 'restaurant', icon: 'images/marker-restaurant.png', html: {
				content: 'Lorem ipsum dolor sit amet.<br /><a href="company-page.html">Read More</a>'
			}},
			{
			    latitude: 67.851242, longitude: 18.721220, group: 'restaurant', icon: 'images/marker-restaurant.png', html: {
				content: 'Lorem ipsum dolor sit amet.<br /><a href="company-page.html">Read More</a>'
			}},
			{
			    latitude: 67.850929, longitude: 19.013861, group: 'shop', icon: 'images/marker-shop.png', html: {
				content: 'Lorem ipsum dolor sit amet.<br /><a href="company-page.html">Read More</a>'
			}}
		]
	});

	/* Hiding all the markers on the map. */
	for (var i in $.goMap.markers) {
		if (this[i] !== 0) {
			$.goMap.showHideMarker(jQuery.goMap.markers[i], false);
		}
	}

	/* Revealing markers from the first group - 'airport' */
	$.goMap.showHideMarkerByGroup('airport', true);
	$.goMap.showHideMarkerByGroup('restaurant', true);
	$.goMap.showHideMarkerByGroup('shop', true);

	/* Processing clicks on the tabs under the map. Revealing corresponding to each tab markers. */
	jQuery('#industries-tabs ul li a').click(function(event) {
		/* Preventing default link action */
		event.preventDefault();
		/* Getting current marker group name. Link ID's and marker group names must coincide. */
		var markerGroup = jQuery(this).attr('id');
		/* Changing current active tab. */
	    //jQuery('#industries-tabs ul li').removeClass('active');
		if ((jQuery(this).parent().attr('class') == 'active') || (jQuery(this).parent().attr('class') == 'first active')){
		    jQuery(this).parent().removeClass('active');
		    jQuery.goMap.showHideMarkerByGroup(markerGroup, false);
		} else {
		    jQuery(this).parent().addClass('active');
		    /* Revealing markers from the corresponding group. */
		    jQuery.goMap.showHideMarkerByGroup(markerGroup, true);
		}
	});

	$.goMap.fitBounds();

});