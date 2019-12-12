
function SANDmenu(Smenu) {
	if (Smenu == 0) {
		document.getElementById("sandwish_menu").className = " ";
		document.getElementById("darkBackground").className = "show";
	} else {
		document.getElementById("sandwish_menu").className = "SANDClose";
		document.getElementById("darkBackground").className = "hide";
	}
}

var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-15);
		timeOut=setTimeout('scrollToTop()',1);
	}
	else clearTimeout(timeOut);
}

function goUpB() {
	if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
		document.getElementById("go2Top").className = "TopH";
	} 
	if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0){
		document.getElementById("go2Top").className = " ";
	}
}

var mode = 1;

function forBox(position,boxmode) {
	
	if (boxmode == 0) {
		switch (position) {
			case 0:
			 document.getElementById("selectorINDICATOR0").className = "SelPos0";
			 document.getElementById("forBoxT").innerHTML = "Distância";
			 document.getElementById("formulas").innerHTML = "<b>S<text class=\"small\">f</text> = S<text class=\"small\">0</text> + (V.t)</b> || <b>S<text class=\"small\">f</text> = S<text class=\"small\">0</text> + (V.t) + ((at²)/2)</b>";
			 document.getElementById("inputFunction").innerHTML = "<input type=\"number\" placeholder=\"Sf(m)\" id=\"FSf\"/><text> = </text><input type=\"number\" placeholder=\"S0(m)\" id=\"FS0\"/><text> + ( </text><input type=\"number\" placeholder=\"V(m/s)\" id=\"FV\"/><text>.</text><input type=\"number\" placeholder=\"t(s)\" id=\"FT\"/><text> )</text><span id=\"aceleration1\"></span><input type=\"checkbox\" title='Incluir aceleração (M.R.U.V.)' id=\"aceleration\" onclick=\"aceleration()\">"
			 mode = 0
			 break;
			case 1:
			 document.getElementById("selectorINDICATOR0").className = "SelPos1";
			 document.getElementById("forBoxT").innerHTML = "Velocidade Média";
			 document.getElementById("formulas").innerHTML = "<b>Vm = d / t</b>    ||    <b>d = Vm . t</b>    ||    <b>t = Vm / d</b>";
			 document.getElementById("inputFunction").innerHTML = "<input type=\"number\" placeholder=\"Vm\" id=\"FVm\"/><text> = </text><input type=\"number\" placeholder=\"D(m)\" id=\"FD\"/><text> / </text><input type=\"number\" placeholder=\"T(s)\" id=\"FT\"/><input type=\"checkbox\" style=\"visibility:hidden\" title='Incluir aceleração (M.R.U.V.)' id=\"aceleration\">"
			 mode = 1
			 break;
			case 2:
			 document.getElementById("selectorINDICATOR0").className = "SelPos2";
			 document.getElementById("forBoxT").innerHTML = "Força";
			 document.getElementById("formulas").innerHTML = "<b>F = m.a²</b>";
			 document.getElementById("inputFunction").innerHTML = "<input type=\"number\" placeholder=\"F(N)\" id=\"FF\"/><text> = </text><input type=\"number\" placeholder=\"m(kg)\" id=\"FM\"/><text> . </text><input type=\"number\" placeholder=\"a(m/s²)\" id=\"FA\"/><text>²</text><input type=\"checkbox\" style=\"visibility:hidden\" title='Incluir aceleração (M.R.U.V.)' id=\"aceleration\">"
			 mode = 2;
			 break;
		}
	} else if (boxmode == 1) {
		switch (position) {
			case 0:
			 document.getElementById("selectorINDICATOR1").className = "SelPos0";
			 document.getElementById("forBoxT1").innerHTML = "Massa e Peso";
			 document.getElementById("content0").className = "CONTENTh";
			 document.getElementById("content1").className = "";
			 break;
			case 1:
			 document.getElementById("selectorINDICATOR1").className = "SelPos1";
			 document.getElementById("forBoxT1").innerHTML = "Conversor de Medidas";
			 document.getElementById("content0").className = "";
			 document.getElementById("content1").className = "CONTENTh";
			 break;
			case 2:
			 document.getElementById("selectorINDICATOR1").className = "SelPos2";
			 document.getElementById("forBoxT1").innerHTML = "?";
			 document.getElementById("content0").className = "CONTENTh";
			 document.getElementById("content1").className = "CONTENTh";
			 break;
		}
	}
}

function aceleration() {
	var check = document.getElementById("aceleration").checked;
	
	if (check == true) {
		document.getElementById("aceleration1").innerHTML = "<div style='display:inline;width: 100px;'> + ((<input type='number' placeholder='a(m/s²)' id='ace'>.t²)/2)</div>";
	} else {
		document.getElementById("aceleration1").innerHTML = "";
	}
}

function solveFunction() {
	var check = document.getElementById("aceleration").checked;
	
	if (check == true) {
		var Acheck = 1;
	} else {
		var Acheck = 0;
	}
	
	switch (mode) {
		case 0:
		 var Sf = document.getElementById("FSf").value;
		 var S0 = document.getElementById("FS0").value;
		 var V = document.getElementById("FV").value;
		 var T = document.getElementById("FT").value;
		 if (Acheck == 1) {
			 var A = document.getElementById("ace").value;
		 }
		 
		 if (Sf == "") {
			if (Acheck == 1) {
				V = V * T;
				V = "+" + V;
				T = T * T;
				A = A * T;
				A = A / 2;
				A = "+" + A;
				Sf = eval(S0+V+A);
			} else {
				V = V * T;
				V = "+" + V;
				Sf = eval(S0+V);
			}
			document.getElementById("FSf").value = Sf;
		 } else if (S0 == "") {
			if (Acheck == 1) {
				S0 = eval(Sf*-1+(V*T)+((A*(T*T)/2)));
				S0 = S0 * -1;
			} else {
				V = V * T;
				V = "-" + V;
				S0 = eval(Sf+V);
			}
			document.getElementById("FS0").value = S0;
		 } else if (V == "") {
			if (Acheck == 1) {
				V = eval(S0-Sf+(A*(T*T)/2));
				V = V / T;
				V = V * -1;
			} else {
				var Sf0 = S0 - Sf;
				Sf0 = Sf0 / T;
				V = Sf0;
				V = V * -1;
			}
			document.getElementById("FV").value = V;
		 } else if (T == "") {
			if (Acheck == 1) {
				/*var Sf0 = S0 - Sf;
				Sf0 = Sf0 / V;
				A = A / 2;
				var Delta = eval(V*V+4*A*Sf0);
				Delta = Math.sqrt(Delta);
				var Bask = eval((-V+Delta)/(2*A))
				T = Bask;*/
				alert("Aviso:\n\nO valor pecisa ser calculado em forma de Báskara, que ainda não pode ser feito aqui.")
			} else {
				var Sf0 = S0 - Sf;
				Sf0 = Sf0 / V;
				T = Sf0;
				T = T * -1;
			}
			document.getElementById("FT").value = T;
		 } else if (A == "") {
			 Sf0 = eval(S0-Sf+V*T);
			 T = T * T;
			 T = T / 2;
			 A = Sf0 / T;
			 A = A * -1;
			 document.getElementById("ace").value = A;
		 } else {
			alert("Um dos espaços deve estar em branco.");
		 };
		 
		 break;
		case 1:
		 var Vm = document.getElementById("FVm").value;
		 var D = document.getElementById("FD").value;
		 var T = document.getElementById("FT").value;
		 
		 if (Vm == "") {
			Vm = D / T;
			document.getElementById("FVm").value = Vm;
		 } else if (D == "") {
			D = Vm * T;
			document.getElementById("FD").value = D;
		 } else if (T == "") {
			T = D / Vm;
			document.getElementById("FT").value = T;
		 } else {
			alert("Um dos espaços deve estar em branco.");
		 };
		 break;
		case 2:
		 var F = document.getElementById("FF").value;
		 var M = document.getElementById("FM").value;
		 var A = document.getElementById("FA").value;
		 
		 if (F == "") {
			A = A * A;
			F = M * A;
			document.getElementById("FF").value = F;
		 } else if (M == "") {
			A = A * A;
			M = F / A;
			document.getElementById("FM").value = M;
		 } else if (A == "") {
			A = F / M;
			A = Math.sqrt(A);
			document.getElementById("FA").value = A;
		 } else {
			alert("Um dos espaços deve estar em branco.");
		 };
		 break;
	}
	
}

function clearFunction() {
		switch (mode) {
		case 1:
		 document.getElementById("FVm").value = "";
		 document.getElementById("FD").value = "";
		 document.getElementById("FT").value = "";
		 break;
		case 2:
		 document.getElementById("FF").value = "";
		 document.getElementById("FM").value = "";
		 document.getElementById("FA").value = "";
		 break;
		case 0:
		 document.getElementById("FSf").value = "";
		 document.getElementById("FS0").value = "";
		 document.getElementById("FV").value = "";
		 document.getElementById("FT").value = "";
		 document.getElementById("ace").value = "";
		 break;
		}
}

function convert(CON) {
	switch (CON) {
		case 0:
		 var var1 = document.getElementById("CON0").value;
		 var1 = var1 / 3.6;
		 document.getElementById("CON1").value = var1;
		 break;
		case 1:
		 var var1 = document.getElementById("CON1").value;
		 var1 = var1 * 3.6;
		 document.getElementById("CON0").value = var1;
		 break;
		case 2:
		 var var1 = document.getElementById("CON2").value;
		 var var2 = document.getElementById("CON3").value;
		 var var3 = var1;
		 var var4 = var2;
		 
		 var2 = var2 / 60;
		 var1 = var1 / 1;
		 var1 = var1 + var2;
		 
		 if (var4 > 59.99999) {
			for (i=var4;i>59.99999;i--) {
				var3++;
				var4--;
				document.getElementById("CON2").value = var3;
				document.getElementById("CON3").value = var4;
			}
		 }
		 
		 document.getElementById("CON4").value = var1;
		 break;
		case 3:
		 var var1 = document.getElementById("CON2").value;
		 var var2 = document.getElementById("CON3").value;
		 var var3 = var1;
		 var var4 = var2;
		 
		 var2 = var2 / 6;
		 var1 = var1 / 1;
		 
		 if (var4 > 59.99999) {
			for (i=var4;i>59.99999;i--) {
				var3++;
				var4--;
				document.getElementById("CON2").value = var3;
				document.getElementById("CON3").value = var4;
			}
		 }
		 
		 document.getElementById("CON4").value = var1;
		 document.getElementById("CON5").value = var2;
		 break;
		case 4:
		 var var1 = document.getElementById("CON4").value;
		 var var2 = document.getElementById("CON5").value;
		 var var3 = var1;
		 var var4 = var2;
		 
		 var2 = var2 * 6;
		 
		 if (var2 > 9.99999) {
			for (i=var4;i>9.99999;i--) {
				var3++;
				var4--;
				document.getElementById("CON4").value = var3;
				document.getElementById("CON5").value = var4;
			}
		 }
		 
		 document.getElementById("CON2").value = var1;
		 document.getElementById("CON3").value = var2;
		 break;
		case 5:
		 var var1 = document.getElementById("CON4").value;
		 var var2 = document.getElementById("CON5").value;
		 var var3 = var1;
		 var var4 = var2;
		 
		 var2 = var2 * 6;
		 
		 if (var2 > 9.99999) {
			for (i=var4;i>9.99999;i--) {
				var3++;
				var4--;
				document.getElementById("CON4").value = var3;
				document.getElementById("CON5").value = var4;
			}
		 }
		 
		 document.getElementById("CON2").value = var1;
		 document.getElementById("CON3").value = var2;
		 break;
		case 6:
		 var var1 = document.getElementById("CON6").value;
		 var1 = var1 * 1.8;
		 var1 = var1 + 32;
		 document.getElementById("CON7").value = var1;
		 break;
		case 7:
		 var var1 = document.getElementById("CON7").value;
		 var1 = var1 - 32;
		 var1 = var1 / 1.8000;
		 document.getElementById("CON6").value = var1;
		 break;
	}
}

function MASS() {
	var MASS = document.getElementById("MASSYour").value;
	
	if (MASS == "") {
		alert("Insira um número!");
	} else {
	
	// Peso
	
	var MASS0 = MASS * 274.13; // Sol
	var MASS1 = MASS * 3.7; // Mercúrio
	var MASS2 = MASS * 8.87; // Vênus
	var MASS3 = MASS * 9.81; // Terra
	var MASS4 = MASS * 3.711; // Marte
	var MASS5 = MASS * 24.79; // Júpiter
	var MASS6 = MASS * 10.44; // Saturno
	var MASS7 = MASS * 8.69; // Urano
	var MASS8 = MASS * 11.15; // Netuno
	var MASS9 = MASS * 1.622; // Lua
	
	MASS0 = Math.round(MASS0);
	MASS1 = Math.round(MASS1);
	MASS2 = Math.round(MASS2);
	MASS3 = Math.round(MASS3);
	MASS4 = Math.round(MASS4);
	MASS5 = Math.round(MASS5);
	MASS6 = Math.round(MASS6);
	MASS7 = Math.round(MASS7);
	MASS8 = Math.round(MASS8);
	MASS9 = Math.round(MASS9);
	
	document.getElementById("MASS0").innerHTML = MASS0;
	document.getElementById("MASS1").innerHTML = MASS1;
	document.getElementById("MASS2").innerHTML = MASS2;
	document.getElementById("MASS3").innerHTML = MASS3;
	document.getElementById("MASS4").innerHTML = MASS4;
	document.getElementById("MASS5").innerHTML = MASS5;
	document.getElementById("MASS6").innerHTML = MASS6;
	document.getElementById("MASS7").innerHTML = MASS7;
	document.getElementById("MASS8").innerHTML = MASS8;
	document.getElementById("MASS9").innerHTML = MASS9;
	
	// Em relação com a Terra;
	
	var MASS00 = MASS * 27.95; // Sol
	var MASS11 = MASS * 0.376; // Mercúrio
	var MASS22 = MASS * 0.903; // Vênus
	var MASS33 = MASS * 1; // Terra
	var MASS44 = MASS * 0.38; // Marte
	var MASS55 = MASS * 2.34; // Júpiter
	var MASS66 = MASS * 1.16; // Saturno
	var MASS77 = MASS * 1.15; // Urano
	var MASS88 = MASS * 1.19; // Netuno
	var MASS99 = MASS * 0.17; // Lua
	
	MASS00 = Math.round(MASS00);
	MASS11 = Math.round(MASS11);
	MASS22 = Math.round(MASS22);
	MASS33 = Math.round(MASS33);
	MASS44 = Math.round(MASS44);
	MASS55 = Math.round(MASS55);
	MASS66 = Math.round(MASS66);
	MASS77 = Math.round(MASS77);
	MASS88 = Math.round(MASS88);
	MASS99 = Math.round(MASS99);
	
	document.getElementById("MASS00").innerHTML = MASS00+" Kg";
	document.getElementById("MASS11").innerHTML = MASS11+" Kg";
	document.getElementById("MASS22").innerHTML = MASS22+" Kg";
	document.getElementById("MASS33").innerHTML = MASS33+" Kg";
	document.getElementById("MASS44").innerHTML = MASS44+" Kg";
	document.getElementById("MASS55").innerHTML = MASS55+" Kg";
	document.getElementById("MASS66").innerHTML = MASS66+" Kg";
	document.getElementById("MASS77").innerHTML = MASS77+" Kg";
	document.getElementById("MASS88").innerHTML = MASS88+" Kg";
	document.getElementById("MASS99").innerHTML = MASS99+" Kg";
	}
}