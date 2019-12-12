
function SANDmenu(Smenu) {
	if (Smenu == 0) {
		document.getElementById("sandwish_menu").className = " ";
		document.getElementById("darkBackground").className = "show";
	} else {
		document.getElementById("sandwish_menu").className = "SANDClose";
		document.getElementById("darkBackground").className = "hide";
	}
}

function initMap() {
	var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: -20.9191704, lng: -56.8233873},
      zoom: 3
    });
}

function offline(mode) {
	switch (mode) {
		case 0:
			document.getElementById("OfflineAlert").innerHTML = "Você está offline! Fique online para vizualizar a página!";
		case 1:
			document.getElementById("OfflineAlert").innerHTML = "";
	}
}