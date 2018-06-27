function calculateAge (dob) {
  var diffDates = Date.now() - dob.getTime()
  var age = new Date(diffDates)

  return Math.abs(age.getUTCFullYear() - 1970)
}

window.addEventListener('load', function () {
  document.getElementById('age').innerHTML = calculateAge(new Date(2000, 11, 4))
}, false)
