var angka1 = document.getElementById("angka1");
var angka2 = document.getElementById("angka2");
var hasil = document.getElementById("hasil");

var tambah = document.getElementById("tambah")
var kurang = document.getElementById("kurang")
var kali = document.getElementById("kali")
var bagi = document.getElementById("bagi")

tambah.onclick = function tambah(){
	hasil.value = Number(angka1.value) + Number(angka2.value);
}
kurang.onclick = function kurang(){
	hasil.value = angka1.value - angka2.value;
}
kali.onclick = function kali(){
	hasil.value = angka1.value * angka2.value;
}
bagi.onclick = function bagi(){
	hasil.value = angka1.value / angka2.value;
}