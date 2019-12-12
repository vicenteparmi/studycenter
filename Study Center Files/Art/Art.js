
function SANDmenu(Smenu) {
	if (Smenu == 0) {
		document.getElementById("sandwish_menu").className = " ";
		document.getElementById("darkBackground").className = "show";
	} else {
		document.getElementById("sandwish_menu").className = "SANDClose";
		document.getElementById("darkBackground").className = "hide";
	}
}

	var Pcolor = "black";

	function setColor(color) {
		var Pcolor = color;
	}

	var canvas = document.querySelector('#paint');
	var ctx = canvas.getContext('2d');
 
	var sketch = document.querySelector('#sketch');
	var sketch_style = getComputedStyle(sketch);
	canvas.width = parseInt(sketch_style.getPropertyValue('width'));
	canvas.height = parseInt(sketch_style.getPropertyValue('height'));
	var mouse = {x: 0, y: 0};
	
	canvas.addEventListener('mousemove', function(e) {
		ctx.strokeStyle = Pcolor;
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
	}, false);
	
	/* Drawing on Paint App */
	ctx.lineWidth = 5;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	//ctx.strokeStyle = 'black';
	
	canvas.addEventListener('mousedown', function(e) {
		ctx.strokeStyle = Pcolor;
		ctx.beginPath();
		ctx.moveTo(mouse.x, mouse.y);
 
		canvas.addEventListener('mousemove', onPaint, false);
		ctx.strokeStyle = Pcolor;
	}, false);
 
	canvas.addEventListener('mouseup', function() {
		ctx.strokeStyle = Pcolor;
		canvas.removeEventListener('mousemove', onPaint, false);
	}, false);
 
	var onPaint = function() {
		ctx.strokeStyle = Pcolor;
		ctx.lineTo(mouse.x, mouse.y);
		ctx.stroke();
	};