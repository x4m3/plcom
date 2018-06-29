var messages = [
  '🇫🇷 🇷🇺',
  'non-stop chaos',
  'i love vim',
  '#заебись',
  'sleep, eat, code, repeat',
  'maybe playing <a href="http://canvas.place">canvas.place</a>',
  'laughing to <a href="https://www.reddit.com/r/ProgrammerHumor">r/programmerhumor</a> memes brb',
  'ебусь голову ежедневно',
  'apprenti développeur',
  'suh dude',
  'suck a dick, dumb shits! — <a href="https://www.netflix.com/title/70300800">sarah lynn</a>'
]

/* get the number of elements */
var numberElements = Object.keys(messages).length

/* function to get a random number based on the number of elements */
function getRandomNumber (numberElements) {
  var min = Math.ceil(0)
  var max = Math.floor(numberElements)
  return Math.floor(Math.random() * (max - min)) + min
}

/* store the number of the object to display */
var finalNumber = getRandomNumber(numberElements)

/* display the object in the html on page load */
window.addEventListener('load', function () {
  document.getElementById('message').innerHTML = messages[finalNumber]
}, false)
