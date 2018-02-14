		$(document).ready(function() {
			$('.nav-button').click( function(event){

				if ($(".nav-bar").css("left") == "0px") {
        			$(".nav-bar").css("left","-20%");
        			$(".nav-button").css("transform","scale(-1, 1)");
    			}
    			else {
    				$(".nav-bar").css("left","0px")
    				$(".nav-button").css("transform","scale(1, -1)");
    			}  
			});
		});