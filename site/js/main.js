		$(document).ready(function() {
			$('.nav_button').click( function(event){

				if ($(".nav_bar").css("left") == "0px") {
        			$(".nav_bar").css("left","-20%");
        			$(".nav_button").css("transform","scale(-1, 1)");
    			}
    			else {
    				$(".nav_bar").css("left","0px")
    				$(".nav_button").css("transform","scale(1, -1)");
    			}  
			});
		});