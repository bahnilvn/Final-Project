var angkaPertama;
var angkaKedua;
var hasil;
var opr;
var opr_seleksi = false;
function tombol(angka) {
	var display = document.getElementById("output").value;
	if (display == "0") {
		display = angka; 
	} else {
		display += angka;
	}
	document.getElementById("output").value = display;
}
 
function clr() {
	document.getElementById("output").value = "0";
	angkaPertama = 0;
	angkaKedua = 0;
	opr_seleksi = false;
}
 
function koma() {
	var display = document.getElementById("output").value;
	if (display.includes(".") == false) {
		display += ".";
	}
	document.getElementById("output").value = display;	
}
 
function operator(o) {
	opr_seleksi = true;
	angkaPertama = parseFloat(document.getElementById("output").value);
	opr = o;
	document.getElementById("output").value = "0";
}
 
function hitung() {
	if (opr_seleksi == true) {
		angkaKedua = parseFloat(document.getElementById("output").value);
		switch(opr){
			case 1 :
				hasil = angkaPertama * angkaKedua;
				document.getElementById("output").value = hasil;			
				break;
			case 2 :
				hasil = angkaPertama / angkaKedua;
				document.getElementById("output").value = hasil;
				break;
			case 3 :
				hasil = angkaPertama - angkaKedua;
				document.getElementById("output").value = hasil;
				break;
			case 4 :
				hasil = angkaPertama + angkaKedua;
				document.getElementById("output").value = hasil;
				break;
		}
		opr_seleksi = false
		hasil = 0;
		angkaPertama = 0;
		angkaKedua = 0;
	}
}