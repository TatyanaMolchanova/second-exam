$(document).ready(function(){
	
	// $('.slider').slick();

	$('.slider').slick({
	  arrows : false,
	  dots: true,
	});


	$('.carousel').slick({
	  arrows : true,
	  dots: true,
	  // autoplay: true,
  	//   autoplaySpeed: 4000,
	});


});



let geocoder  = null, 
	map = null, 
	marker = null,
	popup = null;

	function initMap() {


	let center = {
		lat: 40.668905, 
		lng: -73.9550711
	};

	map = new google.maps.Map(document.getElementById('map'), {
		center	: center,
		zoom 	:	13
	});

	window.addEventListener('resize', function(){
		map.setCenter(center);
	});

	map.addListener('zoom_changed', function() {
		map.setCenter(center);  // при изменении зума маркер в центре остается, центрированный
	});

	var marker = new google.maps.Marker({
		position: center, 
		map: map,
		icon: 'img/marker.png'
	});

}