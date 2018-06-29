var messages = [
]

/* get the number of elements */
var numberElements = Object.keys(messages).length

/* function to get a random number based on the number of elements */
function getRandomNumber (numberElements) {
  var min = Math.ceil(0)
  var max = Math.floor(numberElements) - 1
  return Math.floor(Math.random() * (max - min)) + min
}

/* store the number of the object to display */
var finalNumber = getRandomNumber(numberElements)

/* display the object in the html on page load */
window.addEventListener('load', function () {
  document.getElementById('message').innerHTML = messages[finalNumber]
}, false)
