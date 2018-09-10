window.addEventListener('load', function () {
	document.getElementById('age').innerHTML = Math.abs(new Date(Date.now() - (new Date(2000, 11, 4).getTime())).getUTCFullYear() - 1970)
}, false)
