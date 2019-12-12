function load() {
	document.getElementById("elementOf").innerHTML = "\u220A";
	document.getElementById("conj1").innerHTML = "\u211D";
}
function SANDmenu(Smenu) {
	if (Smenu == 0) {
		document.getElementById("sandwish_menu").className = " ";
		document.getElementById("darkBackground").className = "show";
	} else {
		document.getElementById("sandwish_menu").className = "SANDClose";
		document.getElementById("darkBackground").className = "hide";
	}
}

var displayError = 0;

function calculator(CMode) {
	switch (CMode) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case '00':
		case '+':
		case '-':
		case 0:
		 document.getElementById("display").value += CMode;
		 document.getElementById("BEHINDdisplay").value += CMode;
		 break;
		case 'x':
		 document.getElementById("display").value += '\xD7';
		 document.getElementById("BEHINDdisplay").value += '*';
		 break;
		case '/':
		 document.getElementById("display").value += '÷';
		 document.getElementById("BEHINDdisplay").value += '/';
		 break;
		case 'C':
		 document.getElementById("display").value = '';
		 document.getElementById("BEHINDdisplay").value = '';
		 document.getElementById('display').className = 'display';
		 displayError = 0;
		 break;
		case '.':
		 document.getElementById("display").value += '.';
		 document.getElementById("BEHINDdisplay").value += '.';
		 break;
		case '%':
		 var eq2 = prompt("Insira quanto % você quer.","");
		 var eq = prompt("Insira o número base.","");
		 
		 document.getElementById("display").value += "(" + eq2 + "%" + eq + ")";
		 
		 var eq = eq / 100;
		 var result = eq * eq2;
		 
		 document.getElementById("BEHINDdisplay").value += result;
		 break;
		case 'openB':
		 document.getElementById("display").value += '(';
		 document.getElementById("BEHINDdisplay").value += '(';
		 break;
		case 'closeB':
		 document.getElementById("display").value += ')';
		 document.getElementById("BEHINDdisplay").value += ')';
		 break;
		case 'pi':
		 var eq = document.getElementById("pi").value;
		 document.getElementById("display").value += eq;
		 document.getElementById("BEHINDdisplay").value += Math.PI;
		 break;
		case 'e':
		 var eq = document.getElementById("e").value;
		 document.getElementById("display").value += eq;
		 document.getElementById("BEHINDdisplay").value += Math.E;
		 break;
		case 'phi':
		 var eq = document.getElementById("phi").value;
		 document.getElementById("display").value += eq;
		 document.getElementById("BEHINDdisplay").value += "1.6180339887498948482";
		 break;
		case '=':
		 var eq = document.getElementById("BEHINDdisplay").value;
		 var result = eval(eq);
		 switch (result) {
			case "NaN":
			case "undefined":
			case "Null":
			 result = "Erro de sintaxe";
			default:
			 result = result;
		 }
		 document.getElementById("display").value = result;
		 document.getElementById("BEHINDdisplay").value = result;
		 break;
		case 'x2':
		 var eq = prompt("Insira o número base.","");
		 var eq2 = prompt("Insira o expoente.\n\nEle ficará parecido com "+eq+"²","");
		 
		 var result = Math.pow(eq, eq2);
		 
		 switch (eq2) {
			case '1':
			 eq2 = '¹';
			 break;
			case '2':
			 eq2 = '²';
			 break;
			case '3':
			 eq2 = '³';
			 break;
			case '4':
			 eq2 = '\u2074';
			 break;
			case '5':
			 eq2 = '\u2075';
			 break;
			case '6':
			 eq2 = '\u2076';
			 break;
			case '7':
			 eq2 = '\u2077';
			 break;
			case '8':
			 eq2 = '\u2078';
			 break;
			case '9':
			 eq2 = '\u2079';
			 break;
			default:
			 eq2 = "^"+eq2;
		 };
		 
		 document.getElementById("display").value += eq + eq2;
		 document.getElementById("BEHINDdisplay").value += result;
		 break;
		case 'sqrt':
		 var eq = prompt("Insira o número acima da raiz. (2 ou 3)","");
		 if (eq == 2 || eq == 3) {
		 } else {
			alert("O valor deve ser de 2 ou de 3!");
		 };
		 var eq2 = prompt("Insira o número da raiz.\n\nEle ficará parecido com "+eq+"\u221Ax","");
		 
		 if (eq == 2) {
			result = Math.sqrt(eq2);
		 } else if (eq == 3) {
			result = Math.cbrt(eq2);
		 } else {
			alert("Você colocou um valor diferente de 2 ou 3 na raiz, o resultado estará incorreto.");
			result = "Erro de Sintaxe";
		 }
		 
		 switch (eq) {
			case '2':
			 eq = '²';
			 break;
			case '3':
			 eq = '³';
			 break;
		 };
		 
		 document.getElementById("display").value += eq + "\u221A" + eq2;
		 document.getElementById("BEHINDdisplay").value += result;
		 break;
		case 'error':
		 if (displayError == 0) {
			displayError = 1;
			alert("Não digite aqui! Use o teclado abaixo. Aperte 'C' para reiniciar a calculadora.");
		 }
		 document.getElementById('display').className = 'display display-error';
	}
	
}

var conj1 = 0;
var conj2 = 0;
var conj3 = 0;
var conj4 = 0;

function setconj(Cnumber) {
	switch (Cnumber) {
		case '1':
			if (conj1 < 3) {
				conj1++;
			} else {
				conj1 = 0;
			}
			break;
		case '2':
			if (conj2 < 3) {
				conj2++;
			} else {
				conj2 = 0;
			}
			break;
		case '3':
			if (conj3 < 3) {
				conj3++;
			} else {
				conj3 = 0;
			}
			break;
		case '4':
			if (conj4 < 3) {
				conj4++;
			} else {
				conj4 = 0;
			}
			break;
	}
	
	
	if (conj1 == 0 || conj2 == 0 || conj3 == 0 || conj4 == 0) {
		document.getElementById("conj"+Cnumber).innerHTML = "\u211D"
	} else if (conj1 == 1 || conj2 == 1 || conj3 == 1 || conj4 == 1) {
		document.getElementById("conj"+Cnumber).innerHTML = "\u211A"
	} else if (conj1 == 2 || conj2 == 2 || conj3 == 2 || conj4 == 2) {
		document.getElementById("conj"+Cnumber).innerHTML = "\u2124"
	} else if (conj1 == 3 || conj2 == 3 || conj3 == 3 || conj4 == 3) {
		document.getElementById("conj"+Cnumber).innerHTML = "\u2115"
	}
}