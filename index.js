const accordion = document.getElementsByClassName('accordion')
const contenido = document.getElementsByClassName('contenido-conatiner')

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', () => {
		if (accordion[i].children[1].innerText === '+') {
			accordion[i].children[1].innerText = '-'
			accordion[i].nextElementSibling.style.height = '300px'
			contenido[i].style.opacity = '1'
		} else {
			accordion[i].children[1].innerText = '+'
			accordion[i].nextElementSibling.style.height = '0px'
			contenido[i].style.opacity = '0'
		}
	})
}
