var a1 = document.getElementById("jawaban1");
var a2 = a1;
var a3 = b3;
var b1 = document.getElementById("jawaban2");
var b2 = a2;
var b3 = b1;
var b4 = a1;
var c1 = document.getElementById("jawaban3");
var c2 = b4;
var c3 = c2;
var c4 = c1;
var c5 = a3;
var d1 = document.getElementById("jawaban4");
var d2 = b2;
var d3 = b3;
var d4 = d1;
/*
SQRT1_2
Object
Math
E

Form
URL
Checkbox
K
Image
Number
GlobalPosition

Packages
E
of
Password
Layer
E

World
Anchor
NaN
Text

MimeType
Yes

Plugin
Area
String
Style
World
----
----     11
 		 00
	 	 00
    312	 00  212
  001200010000000001
  012423130001224353
  111213000034892332
  000000000082302434
*/

function cek(){
    if (jawaban3.checked && pert2kol1.checked){
    document.getElementById("Result").innerHTML = "fuck";
	document.title = "Secret Key...";
    }else{ //if (jawaban3.checked = false && pert2kol1.checked = false){
		document.getElementById("Result").innerHTML = "Coba Lagi ;-)";
		document.getElementById("false").innerHTML = "<button onclick="history.back()">Kembali </button>";
		document.title = "Oops!";
	}
}