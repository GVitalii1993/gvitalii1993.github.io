function popup(){
		var popUp =  document.querySelector(".popUp");
		popUp.style.cssText = "display: flex;";
	};

function popupclose(){
		var popUp =  document.querySelector(".popUp");
		popUp.style.display = "none";
        
        var content = document.getElementById("content");
        // var newDiv = document.createElement('div');
        var inputName = document.getElementById("InputNamePlaer").value;
        var InputVkPlaer = document.getElementById("InputVkPlaer").value;

        var date = new Date();
		var y = date.getFullYear();
		var m = date.getMonth();
		var d = date.getDate();
		var resultDate = d+"."+(m+1)+"."+y;

		var InputLvlPlaer = document.getElementById("InputLvlPlaer").value;


		var selected = document.getElementById("mySelect");
		var selectedindex = selected.selectedIndex;
		var selectedWhere = selected.options[selectedindex].innerHTML;

		var Html = 	'<div id="plaer-1" class="col-md-12">' +
						'<div class="avatar-name-1">' +
							'<div class="avatar-1"></div>' +
								'<div class="name-1">' +
									"<h3>"+inputName+"</h3>" +
									"<p>Уровень "+InputLvlPlaer+"</p>" +
								"</div>" +
							'</div>' +
						'<div class="data-rang-1">' +
							"<p>"+selectedWhere+"</p>" +
							'<div class="date-1">' +
								'<a href="'+InputVkPlaer+'" target="_blank"><i class="fa fa-vk" aria-hidden="true"></i></a>' +
								'<p>'+resultDate+'</p>' +
							'</div>' +							
							'<button></button>' +
						'</div>' +
						'<div class="points-1">' +
							'<p>1000</p><p>&#160;/&#160;</p><p>7000</p>' +
							'<img src="img/pointi-con.png" alt="#">' +
						'</div>' +
					'</div>';

        // newDiv.id = 'plaer-1';
        content.insertAdjacentHTML("beforeend", Html);
        // container.appendChild(newDiv);
};