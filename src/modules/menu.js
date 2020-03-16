const menu = () => {
	const menuBtn = document.querySelector('.menu-button');
	const btnMenu = menuBtn.querySelector('img');
	const popupMenu = document.querySelector('.popup-menu');
	const header = document.querySelector('.head');
	const nav = document.querySelector('.top-menu');
	let headerHeight = header.offsetHeight;


	btnMenu.addEventListener('click', () => {
		popupMenu.style.display = 'flex';
	});

	popupMenu.addEventListener('click', (event) => {
		let target = event.target;
		console.log(target);
		if ( target.classList.contains('close-menu-btn-btn') || target.closest('.scroll')) {
			popupMenu.style.display = 'none';
		};

	});
	
	window.addEventListener('scroll', () => {
			if(pageYOffset > headerHeight) {
				nav.style.position = 'fixed';
			} else {
				nav.style.position = '';
			};
	});
};


export default menu;