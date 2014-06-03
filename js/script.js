$(document).ready(function(){
	$('.slideShow').slick({
		centerMode: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        slide: 'div',
        cssEase: 'linear'
	});

	$('.banner').slick({
		infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        arrows: false
      });
});

			
			
