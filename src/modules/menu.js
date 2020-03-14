const menu = () => {
	const menuBtn = document.querySelector('.menu-button');
	const btnMenu = menuBtn.querySelector('img');
	const popupMenu = document.querySelector('.popup-menu');

	btnMenu.addEventListener('click', () => {
		popupMenu.style.display = 'flex';
	});

	popupMenu.addEventListener('click', (event) => {
		let target = event.target;
		console.log(target);
		if ( target.classList.contains('close-menu-btn-btn') || target.closest('.scroll')) {
			popupMenu.style.display = 'none';
		}

	})
};


export default menu;