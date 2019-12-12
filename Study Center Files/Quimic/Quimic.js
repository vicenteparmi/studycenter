
function SANDmenu(Smenu) {
	if (Smenu == 0) {
		document.getElementById("sandwish_menu").className = " ";
		document.getElementById("darkBackground").className = "show";
	} else {
		document.getElementById("sandwish_menu").className = "SANDClose";
		document.getElementById("darkBackground").className = "hide";
	}
}

function sepMax() {
	var eletrons = document.getElementById("sepMax").value;
	if (eletrons > 116) {
		document.getElementById('sepMax').value = 116;
	} else if (eletrons == "") {
		document.getElementById('sepMax').value = "";
	} else if (eletrons < 1) {
		document.getElementById('sepMax').value = 1;
	};
}
function separate() {
	
	////////////////////////////////////////////////////////////////////////////////////////////////////
	var separationMode = document.getElementById("sepMode").checked;
	if (separationMode == true) {
		var eletrons = document.getElementById("sepMax").value;
	} else {
		var eletrons = document.getElementById("ELElist").value;
		var simbols00 = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"];
		var simbols01 = ["","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","?","Fl","?","Lv"];
		var simbols09 = simbols00 + simbols01;
		var simbols09 = simbols09.split(",");
		var found = 0;
		for (i=0;found!=1;i++) {
			var thisELE = simbols09[i];
			if (eletrons == thisELE) {
				eletrons = i + 1;
				break;
			} else {
				continue;
			}
		}
	}
	var separation = [];
	
	document.getElementById("Apro").innerHTML = eletrons;
	document.getElementById("Aele").innerHTML = eletrons+"<i> \u00E9</i>";

	// 1s2
	if (eletrons > 2) {
		separation[0] = "1s<text class='smalln' id='s0'>2</text>";
		eletrons = eletrons - 2;
	} else {
		separation[0] = "1s<text class='smalln' id='s0'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 2s2
	if (eletrons > 2) {
		separation[1] = "2s<text class='smalln' id='s1'>2</text>";
		eletrons = eletrons - 2;
	} else {
		separation[1] = "2s<text class='smalln' id='s1'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 2p6
	if (eletrons > 6) {
		separation[2] = "2p<text class='smalln' id='s2'>6</text>";
		eletrons = eletrons - 6;
	} else {
		separation[2] = "2p<text class='smalln' id='s2'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 3s2
	if (eletrons > 2) {
		separation[3] = "3s<text class='smalln' id='s3'>2</text>";
		eletrons = eletrons - 2;
	} else {
		separation[3] = "3s<text class='smalln' id='s3'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 3p6
	if (eletrons > 6) {
		separation[4] = "3p<text class='smalln' id='s4'>6</text>";
		eletrons = eletrons - 6;
	} else {
		separation[4] = "3p<text class='smalln' id='s4'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 4s2
	if (eletrons > 2) {
		separation[5] = "4s<text class='smalln' id='s5'>2</text>";
		eletrons = eletrons - 2;
	} else {
		separation[5] = "4s<text class='smalln' id='s5'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 3d10
	if (eletrons > 10) {
		separation[6] = "3d<text class='smalln' id='s6'>10</text>";
		eletrons = eletrons - 10;
	} else {
		separation[6] = "3d<text class='smalln' id='s6'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 4p6
	if (eletrons > 6) {
		separation[7] = "4p<text class='smalln' id='s7'>6</text>";
		eletrons = eletrons - 6;
	} else {
		separation[7] = "4p<text class='smalln' id='s7'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 5s2
	if (eletrons > 2) {
		separation[8] = "5s<text class='smalln' id='s8'>2</text>";
		eletrons = eletrons - 2;
	} else {
		separation[8] = "5s<text class='smalln' id='s8'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 4d10
	if (eletrons > 10) {
		separation[9] = "4d<text class='smalln' id='s9'>10</text>";
		eletrons = eletrons - 10;
	} else {
		separation[9] = "4d<text class='smalln' id='s9'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 5p6
	if (eletrons > 6) {
		separation[10] = "5p<text class='smalln' id='s10'>6</text>";
		eletrons = eletrons - 6;
	} else {
		separation[10] = "5p<text class='smalln' id='s10'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 6s2
	if (eletrons > 2) {
		separation[11] = "6s<text class='smalln' id='s11'>2</text>";
		eletrons = eletrons - 2;
	} else {
		separation[11] = "6s<text class='smalln' id='s11'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 4f14
	if (eletrons > 14) {
		separation[12] = "4f<text class='smalln' id='s12'>14</text>";
		eletrons = eletrons - 14;
	} else {
		separation[12] = "4f<text class='smalln' id='s12'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 5d10
	if (eletrons > 10) {
		separation[13] = "5d<text class='smalln' id='s13'>10</text>";
		eletrons = eletrons - 10;
	} else {
		separation[13] = "5d<text class='smalln' id='s13'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 6p6
	if (eletrons > 6) {
		separation[14] = "6p<text class='smalln' id='s14'>6</text>";
		eletrons = eletrons - 6;
	} else {
		separation[14] = "6p<text class='smalln' id='s14'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 7s2
	if (eletrons > 2) {
		separation[15] = "7s<text class='smalln' id='s15'>2</text>";
		eletrons = eletrons - 2;
	} else {
		separation[15] = "7s<text class='smalln' id='s15'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 5f14
	if (eletrons > 14) {
		separation[16] = "5f<text class='smalln' id='s16'>14</text>";
		eletrons = eletrons - 14;
	} else {
		separation[16] = "5f<text class='smalln' id='s16'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 6d10
	if (eletrons > 10) {
		separation[17] = "6d<text class='smalln' id='s17'>10</text>";
		eletrons = eletrons - 10;
	} else {
		separation[17] = "6d<text class='smalln' id='s17'>"+eletrons+"</text>"
		eletrons = 0;
	}
	// 7p6
	if (eletrons > 6) {
		separation[18] = "7p<text class='smalln' id='s18'>6</text>";
		eletrons = eletrons - 6;
	} else {
		separation[18] = "7p<text class='smalln' id='s18'>"+eletrons+"</text>"
		eletrons = 0;
	}

	document.getElementById("energy").innerHTML = separation;
	var length = separation.length;
	
	for (i=0;i<length;i++) {
		var i2 = document.getElementById("s"+i).innerHTML;
		if (i2 == '0') {
			separation[i] = "";
		}
	}

	document.getElementById("energy").innerHTML = "";
	
	for (i=0;i<length;i++) {
		var i2 = separation[i];
		if (i2 != "") {
			document.getElementById("energy").innerHTML += i2+", ";
		}
	}
	
	////////////////////////////////////////////////////////////////////////////////////////
	
	// Separação por níveis de energia;
	for (i=1;i<8;i++) {
		document.getElementById("sub"+i).innerHTML = "";
	}
	
	for (i=0;i<length;i++) {
		var i2 = separation[i];
		var i3 = i2.split("");
		
		var i4 = i3[0];
		
		if (i3 != "") {
			document.getElementById("sub"+i4).innerHTML += i2+" ";
		}
	}
	
	////////////////////////////////////////////////////////////////////////////////////////
	
	// Separação por camadas;
	
	for (i=0;i<length;i++) {
		var i2 = separation[i];
		var i3 = i2.split("");
		var i4 = i3[0];
		var i5 = i3[1];
		
		switch (i4) {
			case '1':
			 i2 = document.getElementById("s0").innerHTML;
			 document.getElementById("layer"+i4).innerHTML = eval(i2);
			 break;
			case '2':
			 switch (i5) {
				 case 's':
				  i2 = document.getElementById("s1").innerHTML;
				  break;
				 case 'p':
				  i2 = document.getElementById("s1").innerHTML + "+" + document.getElementById("s2").innerHTML;
				  break;
			 }
			 document.getElementById("layer"+i4).innerHTML = eval(i2);
			 break;
			case '3':
			 switch (i5) {
				 case 's':
				  i2 = document.getElementById("s3").innerHTML;
				  break;
				 case 'p':
				  i2 = document.getElementById("s3").innerHTML + "+" + document.getElementById("s4").innerHTML;
				  break;
				 case 'd':
				  i2 = document.getElementById("s3").innerHTML + "+" + document.getElementById("s4").innerHTML + "+" + document.getElementById("s6").innerHTML;
				  break;
			 }
			 document.getElementById("layer"+i4).innerHTML = eval(i2);
			 break;
			case '4':
			 switch (i5) {
				 case 's':
				  i2 = document.getElementById("s5").innerHTML;
				  break;
				 case 'p':
				  i2 = document.getElementById("s5").innerHTML + "+" + document.getElementById("s7").innerHTML;
				  break;
				 case 'd':
				  i2 = document.getElementById("s5").innerHTML + "+" + document.getElementById("s7").innerHTML + "+" + document.getElementById("s9").innerHTML;
				  break;
				 case 'f':
				  i2 = document.getElementById("s5").innerHTML + "+" + document.getElementById("s7").innerHTML + "+" + document.getElementById("s9").innerHTML + "+" + document.getElementById("s12").innerHTML;
				  break;
			 }
			 document.getElementById("layer"+i4).innerHTML = eval(i2);
			 break;
			case '5':
			 switch (i5) {
				 case 's':
				  i2 = document.getElementById("s8").innerHTML;
				  break;
				 case 'p':
				  i2 = document.getElementById("s8").innerHTML + "+" + document.getElementById("s10").innerHTML;
				  break;
				 case 'd':
				  i2 = document.getElementById("s8").innerHTML + "+" + document.getElementById("s10").innerHTML + "+" + document.getElementById("s13").innerHTML;
				  break;
				 case 'f':
				  i2 = document.getElementById("s8").innerHTML + "+" + document.getElementById("s10").innerHTML + "+" + document.getElementById("s13").innerHTML + "+" + document.getElementById("s16").innerHTML;
				  break;
			 }
			 document.getElementById("layer"+i4).innerHTML = eval(i2);
			 break;
			case '6':
			 switch (i5) {
				 case 's':
				  i2 = document.getElementById("s11").innerHTML;
				  break;
				 case 'p':
				  i2 = document.getElementById("s11").innerHTML + "+" + document.getElementById("s14").innerHTML;
				  break;
				 case 'd':
				  i2 = document.getElementById("s11").innerHTML + "+" + document.getElementById("s14").innerHTML + "+" + document.getElementById("s17").innerHTML;
				  break;
			 }
			 document.getElementById("layer"+i4).innerHTML = eval(i2);
			 break;
			case '7':
			 switch (i5) {
				 case 's':
				  i2 = document.getElementById("s15").innerHTML;
				  break;
				 case 'p':
				  i2 = document.getElementById("s15").innerHTML + "+" + document.getElementById("s18").innerHTML;
				  break;
			 }
			 document.getElementById("layer"+i4).innerHTML = eval(i2);
			 break;
		}
		
		//document.getElementById("layer"+i4).innerHTML = eval(i2);
	}
	
	////////////////////////////////////////////////////////////////////////////////////////
	
	
	// 1 - 36
	var names0 = ["Hidrog\u00EAnio","H\u00E9lio","L\u00EDtio","Ber\u00EDlio","Boro","Carbono","Nitrog\u00EAnio","Oxig\u00EAnio","Fl\u00FAor","Ne\u00F4nio","S\u00F3dio","Magn\u00E9sio","Alum\u00EDnio","Sil\u00EDcio","F\u00F3sforo","Enxofre","Cloro","Arg\u00F4nio","Pot\u00E1ssio","C\u00E1lcio","Esc\u00E2ndio","Tit\u00E2nio","Van\u00E1dio","Cromo","Mangan\u00EAs","Ferro","Cobalto","N\u00EDquel","Cobre","Zinco","G\u00E1lio","Germ\u00E2nio","Ars\u00EAnio","Sel\u00EAnio","Bromo","Cript\u00F4nio"];
	// 37 - 56
	var names1 = ["","Rub\u00EDdio","Estr\u00F4ncio","\u00EDtrio","Zirc\u00F4nio","Ni\u00F3bidio","Molibd\u00EAnio","Tecn\u00E9cio","Rut\u00EAnio","R\u00F3dio","Pal\u00E1dio","Prata","C\u00E1dmio","\u00EDndio","Estanho","Antim\u00F4nio","Tel\u00FArio","Iodo","Xen\u00F4nio","C\u00E9sio","B\u00E1rio"];
	// 57 - 86
	var names2 = ["","Lat\u00E2nio","C\u00E9rio","Praseod\u00EDmio","Neod\u00EDmio","Prom\u00E9cio","Sam\u00E1rio","Eur\u00F3pio","Gadol\u00EDneo","T\u00E9rbio","Dispr\u00F3sio","H\u00F3lmio","\u00E9rbio","T\u00FAlio","It\u00E9rbio","Lut\u00E9cio","H\u00E1fnio","Tal\u00E2neo","Tungst\u00EAnio","R\u00EAnio","\u00F3smio","Ir\u00EDdio","Platina","Ouro","Merc\u00FArio","T\u00E1lio","Chumbo","Bismuto","Pol\u00F4nio","Astato","Rad\u00F4nio"];
	// 87 - 116
	var names3 = ["","Fr\u00E2ncio","R\u00E1dio","Act\u00EDnio","T\u00F3rio","Protact\u00EDnio","Ucr\u00E2nio","Nept\u00FAnio","Plut\u00F4nio","Am\u00E9rico","C\u00FArio","Berk\u00E9lio","Calif\u00F3rnio","Einst\u00EAnio","F\u00E9rmio","Mendel\u00E9vio","Nob\u00E9lio","Laur\u00EAncio","Rutherf\u00F3rdio","D\u00FAbnio","Seab\u00F3rgio","B\u00F3hrio","H\u00E1ssio","Meitn\u00E9rio","Darmst\u00E1dio","Roentg\u00EAnio","Copern\u00EDcio","Ainda desconhecido","Fler\u00F3vio","Ainda desconhecido","Liverm\u00F3rio"];
	
	
	var separationMode = document.getElementById("sepMode").checked;
	if (separationMode == true) {
		var eletrons = document.getElementById("sepMax").value;
	} else {
		var eletrons = document.getElementById("ELElist").value;
		var simbols00 = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"];
		var simbols01 = ["","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","?","Fl","?","Lv"];
		var simbols09 = simbols00 + simbols01;
		var simbols09 = simbols09.split(",");
		var found = 0;
		for (i=0;found!=1;i++) {
			var thisELE = simbols09[i];
			if (eletrons == thisELE) {
				eletrons = i + 1;
				break;
			} else {
				continue;
			}
		}
	}
	var names = names0 + names1 + names2 + names3;
	var names = names.split(",");
	
	var i = eletrons - 1;
	var i2 = names[i];
	
	document.getElementById("Aname").innerHTML = i2;
	
	// Símbolos
	// 1 - 71
	var simbols0 = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"];
	// 71 - 116
	var simbols1 = ["","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","?","Fl","?","Lv"];
	
	var simbols = simbols0 + simbols1;
	var simbols = simbols.split(",");
	i2 = simbols[i];
	
	document.getElementById("Asimbol").innerHTML = "<i>"+i2+"</i>";
	
	// Classificação (metal, ametal, gás nobre, atípico);
	
	var class0 = [4,3,1,1,2,2,2,2,2,3,1,1,1,2,2,2,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,5,1]

	i2 = class0[i];
	
	switch (i2) {
		case 4:
		 document.getElementById("Aclass").innerHTML = "<div style=\"display:inline-flex;width:25px;height:25px;background-color:#fff;border-style:solid;border-color:black;border-width:1px\"></div><text style=\"vertical-align:super\"> At\u00EDpico</text>"
		 break;
		case 1:
		 document.getElementById("Aclass").innerHTML = "<div style=\"display:inline-flex;width:25px;height:25px;background-color:#FFEB3B;border-style:solid;border-color:black;border-width:1px\"></div><text style=\"vertical-align:super\"> Metal</text>"
		 break;
		case 2:
		 document.getElementById("Aclass").innerHTML = "<div style=\"display:inline-flex;width:25px;height:25px;background-color:#64B5F6;border-style:solid;border-color:black;border-width:1px\"></div><text style=\"vertical-align:super\"> Ametal</text>"
		 break;
		case 3:
		 document.getElementById("Aclass").innerHTML = "<div style=\"display:inline-flex;width:25px;height:25px;background-color:#8BC34A;border-style:solid;border-color:black;border-width:1px\"></div><text style=\"vertical-align:super\"> G\u00E1s Nobre</text>"
		 break;
		case 5:
		 document.getElementById("Aclass").innerHTML = "<div style=\"display:inline-flex;width:25px;height:25px;background-color:#000;border-style:solid;border-color:black;border-width:1px\"></div><text style=\"vertical-align:super\"> Desconhecido</text>"
		 break;
	}
	
	var state0 = [1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0]
	
	i2 = state0[i];
	
	switch (i2) {
		case 0:
		 document.getElementById("Astate").innerHTML = "<div style=\"display:inline-flex;width:25px;height:25px;background-color:#000;border-style:solid;border-color:black;border-width:1px\"></div><text style=\"vertical-align:super\"> S\u00F3lido</text>"
		 break;
		case 1:
		 document.getElementById("Astate").innerHTML = "<div style=\"display:inline-flex;width:25px;height:25px;background-color:#F44336;border-style:solid;border-color:black;border-width:1px\"></div><text style=\"vertical-align:super\"> Gasoso</text>"
		 break;
		case 2:
		 document.getElementById("Astate").innerHTML = "<div style=\"display:inline-flex;width:25px;height:25px;background-color:#03A9F4;border-style:solid;border-color:black;border-width:1px\"></div><text style=\"vertical-align:super\"> L\u00EDquido</text>"
		 break;
		case 3:
		 document.getElementById("Astate").innerHTML = "<div style=\"display:inline-flex;width:25px;height:25px;background-color:#37474F;border-style:solid;border-color:black;border-width:1px\"></div><text style=\"vertical-align:super\"> Desconhecido</text>"
		 break;
	}
	
	if (i > 55 && i < 71) {
		document.getElementById("Aserie").innerHTML = "S\u00E9rie dos lantan\u00EDdeos";
	} else if (i > 87 && i < 103) {
		document.getElementById("Aserie").innerHTML = "S\u00E9rie dos actin\u00EDdeos";
	} else {
		document.getElementById("Aserie").innerHTML = "N\u00E3o pertence \u00E0 nenhuma s\u00E9rie";
	}
	
	////////////////////////////////////////////////////////////////////////////////////////
	
	// Númeos quânticos
	
	for (i=0;i<length;i++) {
		var i2 = separation[i];
		if (i2 == "") {
			i--
			i2 = separation[i];
			break;
		} else {
			continue;
		};
	};	
	
	i2 = i2.split("");
	i3 = i2[0]; // Principal
	i4 = i2[1]; // Secundário (letra);
	alert(i2[31] + i2[32])
	if (i2[32] != "<") {
		var i5 = i2[32];
	} else {
		var i5 = i2[31];
	};
	var i6;
	var i7;
	
	document.getElementById("QUAp").innerHTML = i3; // Principal
	
	switch (i4) {
		case 's':
		 document.getElementById("QUAs").innerHTML = "0";
		 break;
		case 'p':
		 document.getElementById("QUAs").innerHTML = "1";
		 break;
		case 'd':
		 document.getElementById("QUAs").innerHTML = "2";
		 break;
		case 'f':
		 document.getElementById("QUAs").innerHTML = "3";
		 break;
		
	} // Secundário
		
	/*switch (i3) {
		case '1':
		 i5 = document.getElementById("s0").innerHTML;
		 break;
		case '2':
		 switch (i4) {
			 case 's':
			  i5 = document.getElementById("s1").innerHTML;
			  break;
			 case 'p':
			  i5 = document.getElementById("s1").innerHTML + "+" + document.getElementById("s2").innerHTML;
			  break;
		 }
		 break;
		case '3':
		 switch (i4) {
			 case 's':
			  i5 = document.getElementById("s3").innerHTML;
			  break;
			 case 'p':
			  i5 = document.getElementById("s3").innerHTML + "+" + document.getElementById("s4").innerHTML;
			  break;
			 case 'd':
			  i5 = document.getElementById("s3").innerHTML + "+" + document.getElementById("s4").innerHTML + "+" + document.getElementById("s6").innerHTML;
			  break;
		 }
		 break;
		case '4':
		 switch (i4) {
			 case 's':
			  i5 = document.getElementById("s5").innerHTML;
			  break;
			 case 'p':
			  i5 = document.getElementById("s5").innerHTML + "+" + document.getElementById("s7").innerHTML;
			  break;
			 case 'd':
			  i5 = document.getElementById("s5").innerHTML + "+" + document.getElementById("s7").innerHTML + "+" + document.getElementById("s9").innerHTML;
			  break;
			 case 'f':
			  i5 = document.getElementById("s5").innerHTML + "+" + document.getElementById("s7").innerHTML + "+" + document.getElementById("s9").innerHTML + "+" + document.getElementById("s12").innerHTML;
			  break;
		 }
		 break;
		case '5':
		 switch (i4) {
			 case 's':
			  i5 = document.getElementById("s8").innerHTML;
			  break;
			 case 'p':
			  i5 = document.getElementById("s8").innerHTML + "+" + document.getElementById("s10").innerHTML;
			  break;
			 case 'd':
			  i5 = document.getElementById("s8").innerHTML + "+" + document.getElementById("s10").innerHTML + "+" + document.getElementById("s13").innerHTML;
			  break;
			 case 'f':
			  i5 = document.getElementById("s8").innerHTML + "+" + document.getElementById("s10").innerHTML + "+" + document.getElementById("s13").innerHTML + "+" + document.getElementById("s16").innerHTML;
			  break;
		 }
		 break;
		case '6':
		 switch (i4) {
			 case 's':
			  i5 = document.getElementById("s11").innerHTML;
			  break;
			 case 'p':
			  i5 = document.getElementById("s11").innerHTML + "+" + document.getElementById("s14").innerHTML;
			  break;
			 case 'd':
			  i5 = document.getElementById("s11").innerHTML + "+" + document.getElementById("s14").innerHTML + "+" + document.getElementById("s17").innerHTML;
			  break;
		 }
		 break;
		case '7':
		 switch (i4) {
			 case 's':
			  i5 = document.getElementById("s15").innerHTML;
			  break;
			 case 'p':
			  i5 = document.getElementById("s15").innerHTML + "+" + document.getElementById("s18").innerHTML;
			  break;
		 }
		 break;
	}
	i5 = eval(i5); // Elétrons de Valência */
	
	switch (i4) {
		case 's':
		 switch (i5) {
			 case '1':
			  i6 = 0;
			  i7 = "-\u00BD";
			  break;
			 case '2':
			  i6 = 0;
			  i7 = "\u00BD";
			  break;
		 }
		 break;
		case 'p':
		 switch (i5) {
			 case '1':
			  i6 = -1;
			  i7 = "-\u00BD"
			  break;
			 case '4':
			  i6 = -1;
			  i7 = "\u00BD";
			  break;
			 case '2':
			  i6 = 0;
			  i7 = "-\u00BD";
			  break;
			 case '5':
			  i6 = 0;
			  i7 = "\u00BD";
			  break;
			 case '3':
			  i6 = 0;
			  i7 = "-\u00BD";
			 case '6':
			  i6 = 1;
			  i7 = "\u00BD";
			  break;
		 }
		 break;
		case 'd':
		 switch (i5) {
			 case '1':
			  i6 = -2;
			  i7 = "-\u00BD";
			  break;
			 case '6':
			  i6 = -2;
			  i7 = "\u00BD";
			  break;
			 case '2':
			  i6 = -1;
			  i7 = "-\u00BD";
			  break;
			 case '7':
			  i6 = -1;
			  i7 = "\u00BD";
			  break;
			 case '3':
			  i6 = 0;
			  i7 = "-\u00BD";
			  break;
			 case '8':
			  i6 = 0;
			  i7 = "\u00BD";
			  break;
			 case '4':
			  i6 = 1;
			  i7 = "-\u00BD";
			  break;
			 case '9':
			  i6 = 1;
			  i7 = "\u00BD";
			  break;
			 case '5':
			  i6 = 2;
			  i7 = "-\u00BD";
			  break;
			 case '10':
			  i6 = 2;
			  i7 = "\u00BD";
			  break;
		 }
		 break;
		case 'f':
		 switch (i5) {
			 case '1':
			  i6 = -3;
			  i7 = "-\u00BD";
			  break;
			 case '8':
			  i6 = -3;
			  i7 = "\u00BD";
			  break;
			 case '2':
			  i6 = -2;
			  i7 = "-\u00BD";
			  break;
			 case '9':
			  i6 = -2;
			  i7 = "\u00BD";
			  break;
			 case '3':
			  i6 = -1;
			  i7 = "-\u00BD";
			  break;
			 case '10':
			  i6 = -1;
			  i7 = "\u00BD";
			  break;
			 case '4':
			  i6 = 0;
			  i7 = "-\u00BD";
			  break;
			 case '11':
			  i6 = 0;
			  i7 = "\u00BD";
			  break;
			 case '5':
			  i6 = 1;
			  i7 = "-\u00BD";
			  break;
			 case '12':
			  i6 = 1;
			  i7 = "\u00BD";
			  break;
			 case '6':
			  i6 = 2;
			  i7 = "-\u00BD";
			  break;
			 case '13':
			  i6 = 2;
			  i7 = "\u00BD";
			  break;
			 case '7':
			  i6 = 3;
			  i7 = "-\u00BD";
			  break;
			 case '14':
			  i6 = 3;
			  i7 = "\u00BD";
			  break;
		 }
		 break;
	} // Magnético
	
	document.getElementById("QUAm").innerHTML = i6;
	document.getElementById("QUAsp").innerHTML = i7;
	
	document.getElementById("QUAspin").checked = false;
}

function spin() {
	var i2 = document.getElementById("QUAsp").innerHTML;
	if (i2 == "\u00BD") {
		document.getElementById("QUAsp").innerHTML = "-\u00BD";
	} else {
		document.getElementById("QUAsp").innerHTML = "\u00BD";
	};
}