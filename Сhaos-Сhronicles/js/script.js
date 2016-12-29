function popup(){
		var popUp =  document.querySelector(".popUp");
		popUp.style.cssText = "display: flex;";
	};

function popupclose(){
		var popUp =  document.querySelector(".popUp");
		popUp.style.display = "none";
        
        var container = document.getElementById("content");
        // var newDiv = document.createElement('div');
        var inputName = document.getElementById("InputNamePlaer").value;
        var InputVkPlaer = document.getElementById("InputVkPlaer").value;

		var Html = 	'<div id="plaer-1" class="col-md-12">' +
						'<div class="avatar-name-1">' +
							'<div class="avatar-1"></div>' +
								'<div class="name-1">' +
									"<h3>"+ inputName +"</h3>" +
									"<p>Уровень 80</p>" +
								"</div>" +
							"</div>" +
						'<div class="data-rang-1">' +
							"<p>Хранитель</p>" +
							'<div class="date-1"><a href="https://vk.com/id228642634" target="_blank"><i class="fa fa-vk" aria-hidden="true"></i></a><p>21.09.2016</p></div>' +
							"<button></button>" +
						'</div>' +
						'<div class="points-1">' +
							'<p>1000</p><p>&#160;/&#160;</p><p>7000</p>' +
							'<img src="img/pointi-con.png" alt="#">' +
						'</div>' +
					'</div>';

        // newDiv.id = 'plaer-1';
        container.insertAdjacentHTML("beforeend", Html);
        // container.appendChild(newDiv);
};