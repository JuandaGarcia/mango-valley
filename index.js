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
	var x = document.getElementsByClassName('mySlides')
	var i
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'
	}
	x[slideIndex - 1].style.display = 'flex'
}
showDivs2(slideIndex)

function plusDivs2(n) {
	showDivs2((slideIndex += n))
}

function showDivs2(n) {
	var x = document.getElementsByClassName('mySlidesProjects')
	var i
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'
	}
	x[slideIndex - 1].style.display = 'flex'
}

//Modal
const Personas = [
	{
		nombre: 'Danna García',
		profesion: 'UI/UX designer',
		academico: 'Pontificia Universidad Javeriana - 2004',
		laboral: 'Google - 2016',
		img: './img/1.jpg'
	},
	{
		nombre: 'Juan García',
		profesion: 'Frontend Developer',
		academico: 'Universidad Santiago de Cali - 2005',
		laboral: 'Facebook - 2017',
		img: './img/2.jpg'
	},
	{
		nombre: 'Sofia Collazos',
		profesion: 'Administradora de bases de datos',
		academico: 'Universidad Libre - 2004',
		laboral: 'Youtube - 2018',
		img: './img/3.jpg'
	},
	{
		nombre: 'David Rincón',
		profesion: 'Backend Developer ',
		academico: 'Universidad Icesi - 2003',
		laboral: 'Instagram - 2019',
		img: './img/4.jpg'
	},
	{
		nombre: 'Kevin Castro',
		profesion: 'Devops engineer',
		academico: 'Universidad Autónoma de Occidente - 2006',
		laboral: 'Twitter - 2015',
		img: './img/5.jpg'
	}
]

const modal_person = document.getElementById('modal')
const back_modal = document.getElementById('modal-back')
const back_modal_transparent = document.getElementById('modal-back-tranparent')
back_modal_transparent.addEventListener('click', cerrarModal)

const nombre = document.getElementById('nombre')
const profesion = document.getElementById('profesion')
const academico = document.getElementById('academico')
const laboral = document.getElementById('laboral')
const profile_img = document.getElementById('profile_img')

function modal(persona) {
	modal_person.style.zIndex = '150'
	back_modal.style.opacity = '1'
	back_modal.style.zIndex = '140'
	back_modal_transparent.style.zIndex = '120'

	nombre.innerText = Personas[persona].nombre
	profesion.innerText = Personas[persona].profesion
	academico.innerText = Personas[persona].academico
	laboral.innerText = Personas[persona].laboral
	profile_img.src = Personas[persona].img
}

function cerrarModal() {
	modal_person.style.zIndex = '4'
	back_modal.style.opacity = '0'
	back_modal.style.zIndex = '4'
	back_modal_transparent.style.zIndex = '4'
}
