---
layout: default
permalink: /email/
---

# Email

Send me an email if you want to work with me, propose a project idea, or just to say hi!

Write to <button id="emailButton" class="button button--selectable" onclick="location.href = 'mailto:p@philippeloctaux.com';">p at philippeloctaux dot com</button>

If you want to encrypt your message, I have a [pgp key](https://x4m3.rocks/pgp-0x69771CD04BA82EC0.txt) at your disposal.

I also have a [Keybase](/keybase.txt) account, but I don't check it often.

<script>
	document.getElementById("emailButton").addEventListener("click", function() {
		this.getAttribute("selected") ? this.removeAttribute("selected") : this.setAttribute("selected", true);
	});
</script>
