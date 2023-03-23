document.addEventListener("DOMContentLoaded", hiddenCloseclick());
document.getElementById('side-menu').addEventListener("click", hiddenCloseclick);
function hiddenCloseclick() {
	let x = document.getElementById('hidden-menu');
	if (x.style.display == "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none"
	}
};

// active class of menu items onscroll
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 319.99) {
		document.querySelectorAll('.section__layout').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
				document.querySelectorAll('.nav a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});

				document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
			}
		});
	}
});

// active class of menu items onscroll
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.section__layout').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.header__nav-menu').clientHeight <= scrollDistance) {
				document.querySelectorAll('.header__nav-menu a').forEach((el) => {
					if (el.classList.contains('nav-menu__item-link--active')) {
						el.classList.remove('nav-menu__item-link--active');
					}
				});

				document.querySelectorAll('.header__nav-menu div')[i].querySelector('a').classList.add('nav-menu__item-link--active');
			}
		});
	}
});