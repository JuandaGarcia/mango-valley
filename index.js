const accordion = document.getElementsByClassName('accordion')

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', () => {
		if (accordion[i].children[1].innerText === '+') {
			accordion[i].children[1].innerText = '-'
			accordion[i].nextElementSibling.style.height = '300px'
		} else {
			accordion[i].children[1].innerText = '+'
			accordion[i].nextElementSibling.style.height = '0px'
		}
	})
}
