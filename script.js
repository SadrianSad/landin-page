const footerYear = document.querySelector('.footer__year')
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

const toggleHamburgerClass = () => {
	const hamburgerButton = document.querySelector('.hamburger--elastic')
	hamburgerButton.addEventListener('click', () => {
		hamburgerButton.classList.toggle('is-active')
	})
}
toggleHamburgerClass()

addEventListener('DOMContentLoaded', () => {
	const toggleMenuButtons = document.querySelectorAll('.hamburger')
	const navigation = document.querySelector('.navbar-mobile')
	const addClass = () => {
		toggleMenuButtons.forEach(toggleMenuButton => {
			toggleMenuButton.addEventListener('click', () => {
				navigation.classList.toggle('ss-body-visible')
			})
		})
	}
	addClass()
})

AOS.init({
	startEvent: 'DOMContentLoaded',
	offset: 200,
	once: true,
})
