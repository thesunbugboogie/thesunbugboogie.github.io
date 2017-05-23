$(document).ready(function(){
  
	
$('.slick').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  fade: true,
  autoplay: true,
  cssEase: 'linear',
  prevArrow:"<img class='a-left control-c prev slick-prev' src='img/slick/left.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='img/slick/right.png'>"
});

$('.slick-dots').on('click', function() {
    $('.autoplay').slick('slickPause');
});

  $(".boogie-slideshow").vegas({
    slides: [
    	  { src: "img/boogie/buddies.jpg"},
        { src: "img/boogie/dance.jpg" },
        { src: "img/boogie/turtle.jpg" },
        { src: "img/boogie/barrel.jpg" },
        { src: "img/boogie/radio.jpg" },
        { src: "img/boogie/sandwich.jpg" },
    ],
    animation: 'random',
    delay: 8000,
    cover: false,
    timer: false,
    slidesToKeep: 0,
});
});

