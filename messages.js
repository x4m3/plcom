let messages = [
	'🇫🇷 🇷🇺',
	'i love vim',
	'#заебись',
	'sleep, eat, code, repeat',
	'maybe playing <a href="http://canvas.place">canvas.place</a>',
	'laughing to <a href="https://www.reddit.com/r/ProgrammerHumor">r/programmerhumor</a> memes brb',
	'ебусь голову ежедневно',
	'<a href="https://www.google.com/search?q=wubba+lubba+dub+dub">wubba lubba dub dub!</a>',
	'echo cEBwaGlsaXBwZWxvY3RhdXguY29tCg== | base64 --decode',
	'6-2-1 rule',
	'<b>:wq</b>'
]

/* get the number of elements */
let numberElements = Object.keys(messages).length

/* function to get a random number based on the number of elements */
function getRandomNumber (numberElements) {
	let min = Math.ceil(0)
	let max = Math.floor(numberElements)
	return Math.floor(Math.random() * (max - min)) + min
}

/* store the number of the object to display */
let finalNumber = getRandomNumber(numberElements)

/* display the object in the html on page load */
window.addEventListener('load', function () {
	document.getElementById('message').innerHTML = messages[finalNumber]
}, false)
