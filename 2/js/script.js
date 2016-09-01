$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 20
  });
       //Якорь
  $("nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
		  //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
  $('.menuu').click(function (e){
  	$(".mobim").toggle();
  	});
});
