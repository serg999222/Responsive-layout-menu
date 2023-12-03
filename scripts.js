let burgers = document.querySelectorAll('.header_burger_item');
let burger = document.querySelector('.header_burger').addEventListener('click', someFunk);
let menu = document.querySelector('.header_nav');

let isActive

document.addEventListener("DOMContentLoaded", function () {
	let navItems = document.querySelectorAll('.header_nav_item');
	navItems.forEach(navItem => {
		navItem.addEventListener('click', function (event) {
			// Перевірити, чи є в елементі li вкладений список ol

			let olElement = navItem.querySelector('.ol_item');
			if (!olElement) {

				document.querySelector('.header_nav').classList.toggle('active');
				navItems.forEach(item => {
					item.classList.toggle('active');
				});
				document.querySelectorAll('.header_burger_item').forEach(item => {
					item.classList.toggle('active');
					if (item.classList.contains('burger_item1')) {
						item.classList.toggle('rotate-45deg');
					}
					if (item.classList.contains('burger_item2')) {
						item.classList.toggle('anim');
					}
					if (item.classList.contains('burger_item3')) {
						item.classList.toggle('rotate--45deg');
					}
				});
			} else {
				navItem.querySelectorAll('.ol_item').forEach(item => {
					item.classList.toggle('active')
					item.addEventListener('click', () => {
						document.querySelector('.header_nav').classList.toggle('active');
						navItems.forEach(item => {
							item.classList.toggle('active');
						});
						document.querySelectorAll('.header_burger_item').forEach(item => {
							item.classList.toggle('active');
							if (item.classList.contains('burger_item1')) {
								item.classList.toggle('rotate-45deg');
							}
							if (item.classList.contains('burger_item2')) {
								item.classList.toggle('anim');
							}
							if (item.classList.contains('burger_item3')) {
								item.classList.toggle('rotate--45deg');
							}
						});
					})
				})
			}
		});
	});
});



function someFunk() {
	burgers.forEach(item => {
		if (item.classList.contains('burger_item1')) {
			item.classList.toggle('rotate-45deg');
		}
		if (item.classList.contains('burger_item2')) {
			item.classList.toggle('anim');
		}
		if (item.classList.contains('burger_item3')) {
			item.classList.toggle('rotate--45deg');
		}
	})
	document.querySelector('.header_nav').classList.toggle('active');
	document.querySelectorAll('.header_nav_item').forEach(item => {
		item.classList.toggle('active');
	})
}

document.addEventListener("DOMContentLoaded", function () {
	let carts = document.querySelectorAll('.cart');

	carts.forEach((cart, index) => {
		if (index % 2 !== 0) {
			cart.classList.add('odd');
		}
	});
});



document.addEventListener("DOMContentLoaded", function () {
	let carts = document.querySelectorAll('.cart_image');
	let cartsImg = document.querySelectorAll('.cart_image img');

	carts.forEach(item => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			item.classList.toggle('active')
		});
	})

	cartsImg.forEach(item => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			item.classList.toggle('active')
		});
	})
});




