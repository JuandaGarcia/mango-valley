//Accordion
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

//Slide
var slideIndex = 1
showDivs(slideIndex)

function plusDivs(n) {
	showDivs((slideIndex += n))
}

function showDivs(n) {
	var i
	var x = document.getElementsByClassName('mySlides')
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'
		x[i].style.opacity = '0'
	}
	x[slideIndex - 1].style.display = 'flex'
	x[slideIndex - 1].style.opacity = '1'
}
