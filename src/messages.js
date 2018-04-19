var phil = [
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
{ "rn" : "go top 1" },
{ "rn" : "playing <a href='http://canvas.place'>canvas.place</a> brb" }
];
var tool = [
{ "used": "vim" },
{ "used": "vscode" },
{ "used": "linux" },
{ "used": "windows" }
];
var NuOb = Object.keys(phil).length;
var NuOb_editor = Object.keys(tool).length;
function getRand(number_objects) {
	min = Math.ceil(0);
	max = Math.floor(number_objects);
	max = max--;
	return Math.floor(Math.random() * (max - min)) + min;
}
var FiNu = getRand(NuOb);
var final_number_tool = getRand(NuOb_editor);
window.addEventListener("load", function() {
	document.getElementById("phil-status").innerHTML = phil[FiNu].rn;
	document.getElementById("tool-used").innerHTML = tool[final_number_tool].used;
	console.log("status number " + FiNu + " displayed");
}, false);
