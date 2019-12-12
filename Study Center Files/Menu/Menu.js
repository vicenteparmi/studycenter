var expandM = 1;

function SANDexpandOp() {
	if (expandM == 0) {
		document.getElementById("mat").className = "matH";
		document.getElementById("matI").className = "matIH";
		expandM = 1;
	} else {
		document.getElementById("mat").className = " ";
		document.getElementById("matI").className = " ";
		expandM = 0;
	};
}