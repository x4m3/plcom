var phil = [
"maybe sleeping",
"tea powered person",
"это фиаско братан!",
"i need to do more stuff",
"работаем ребята!",
"non-stop chaos",
"check out <a href='http://db.philippeloctaux.com'><b>deadbead</b></a>!",
"random carnage à la phil",
"half french half russian and half drunk",
"vim lover",
"trashcan maker <a href='http://poubelle.online'>poubelle.online</a>",
"#заебись",
"sleep, eat, code, repeat",
"go top 1",
"playing <a href='http://canvas.place'>canvas.place</a> brb"
];

var tool = [
"vim",
"vscode",
"linux",
"windows",
"git",
"spotify",
"the internet",
"chrome",
];

/* get the number of elements */
var number_elements_phil = Object.keys(phil).length;
var number_elements_tool = Object.keys(tool).length;

/* function to get a random number based on the number of elements */
function get_random_number(number_elements) {
	min = Math.ceil(0);
	max = Math.floor(number_elements);
	max = max--;
	return Math.floor(Math.random() * (max - min)) + min;
}

/* store the number of the object to display */
var final_number_phil = get_random_number(number_elements_phil);
var final_number_tool = get_random_number(number_elements_tool);

/* display the object in the html on page load */
window.addEventListener("load", function() {
	document.getElementById("phil-rn").innerHTML = phil[final_number_phil];
	document.getElementById("tool-used").innerHTML = tool[final_number_tool];
}, false);
