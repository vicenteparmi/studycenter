
function SANDmenu(Smenu) {
	if (Smenu == 0) {
		document.getElementById("sandwish_menu").className = " ";
		document.getElementById("darkBackground").className = "show";
	} else {
		document.getElementById("sandwish_menu").className = "SANDClose";
		document.getElementById("darkBackground").className = "hide";
	}
}

function moreinfo(message) {
	document.getElementById("infoBox").innerHTML = message;
	
	document.getElementById("infoBox").className = "infoBoxS";
}