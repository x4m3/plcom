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

/* get the number of objects */
var number_objects_phil = Object.keys(phil).length;
var number_objects_tool = Object.keys(tool).length;

/* function to get a random number based on the number of objects */
function get_random_number(number_objects) {
	min = Math.ceil(0);
	max = Math.floor(number_objects);
	max = max--;
	return Math.floor(Math.random() * (max - min)) + min;
}

/* store the number of the object to display */
var final_number_phil = get_random_number(number_objects_phil);
var final_number_tool = get_random_number(number_objects_tool);

/* display the object in the html on page load */
window.addEventListener("load", function() {
	document.getElementById("phil-rn").innerHTML = phil[final_number_phil].rn;
	document.getElementById("tool-used").innerHTML = tool[final_number_tool].used;
}, false);
