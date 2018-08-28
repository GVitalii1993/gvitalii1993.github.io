// $(document).ready(function() {
// 	$(document).on("click", ".color-theme", function() {
// 		// $('color-theme').css('background', '');
// 		// if ($('.container').css("background") == "#fff") {
//   // 			$( ".container" ).css('background', '#000');
// 		// } else {
//   // 			$( ".container" ).css('background', '#fff');
// 		// }
// 	});
// });

$( function() {
  $('.color-theme').click( function() {
   $(this).toggleClass("color-theme-dark-img");
   $('body').toggleClass("background-theme-dark color-theme-dark");
   $('.container').toggleClass("background-theme-dark color-theme-dark");
   $('.player-play').toggleClass("player-play-light");
   $('.player-pause').toggleClass("player-pause-light");
   $('.skype').toggleClass("skype-light");
   $('.viber').toggleClass("viber-light");
   $('.whatsapp').toggleClass("whatsapp-light");
   $('.telegram').toggleClass("telegram-light");
   $('.instagram').toggleClass("instagram-light");
   $('.nav ul li a').toggleClass("color-theme-dark");
   $('.nav ul li').toggleClass("bg-button1-light");
   $('.name,.email').toggleClass("color-theme-dark bg-button-light");
   $('.message').toggleClass("bg-button2-light");
   $('.button-submit').toggleClass("bg-button-light");
   $('footer').toggleClass("footer-light");
   $('.social ul li a:hover').css('color','#fff');
  } );
} );