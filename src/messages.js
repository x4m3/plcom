var ss = [
{ "rn" : "maybe sleeping" },
{ "rn" : "tea powered person" },
{ "rn" : "это фиаско братан!" },
{ "rn" : "i need to do more stuff" },
{ "rn" : "работаем ребята!" },
{ "rn" : "non-stop chaos" },
{ "rn" : "check out <a href='http://db.philippeloctaux.com'><b>deadbead</b></a>!" },
{ "rn" : "random carnage à la phil" },
{ "rn" : "half french half russian and half drunk" },
{ "rn" : "vim lover" },
{ "rn" : "trashcan maker <a href='http://poubelle.online'>poubelle.online</a>" },
{ "rn" : "#заебись" },
{ "rn" : "sleep, eat, code, repeat" },
{ "rn" : "go top 1" }
];
var NuOb = Object.keys(ss).length;
function getRand() {
	min = Math.ceil(0);
	max = Math.floor(NuOb);
	max = max--;
	return Math.floor(Math.random() * (max - min)) + min;
}
var FiNu = getRand();
window.addEventListener("load", function() {
	document.getElementById("q").innerHTML = ss[FiNu].rn;
	console.log("status number " + FiNu + " displayed");
}, false);
