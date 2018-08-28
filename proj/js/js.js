$(document).ready(function() {
	$(".header-slider").each(function () {
		var obj = $(this);
		$(obj).append("<div class='nav'></div>");
		$(obj).find("li").each(function () {
			$(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
			$(this).addClass("header-slider"+$(this).index());
		});
  		$(obj).find("span").first().addClass("on"); 
 	});

function sliderJS (obj, sl) { 
 var ul = $(sl).find("ul");
 var bl = $(sl).find("li.header-slider"+obj);
 var step = $(bl).height();
 $(ul).animate({marginTop: "-"+step*obj}, 500);
}

$(document).on("click", ".header-slider .nav span", function() { 
 var sl = $(this).closest(".header-slider");
 $(sl).find("span").removeClass("on");
 $(this).addClass("on");
 var obj = $(this).attr("rel");
 sliderJS(obj, sl);
 return false;
});

$(document).ready(function() {
    var i = $(".count-product-shop-basket").val;
	$(".count-add").click(function(){
		i++;
		$(".count-product-shop-basket").attr('value', i);
	});
});

$(document).on("click", ".popup-on", function() {
		if ($('.shop-basket').css("display") == "none") {
  			$( ".shop-basket" ).css('display', 'flex');
		} else {
  			$( ".shop-basket" ).css('display', 'none');
		}
	});

});

$(document).ready(function() {
    var i = $(".quantity-shop-basket input").val();
    $(".quantity-shop-basket a").click(function(){
        $(".quantity-shop-basket input").val(++i);
    });
});