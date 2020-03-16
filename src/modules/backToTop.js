const backToTop = () => {
	const arrow = document.getElementById('totop');
	const header = document.querySelector('.header-main');
	let headerWidth = header.offsetHeight;
	arrow.style.display = 'none';


	window.addEventListener('scroll', () => {
		if (pageYOffset > headerWidth) {
			arrow.style.display = 'block';
		} else if (pageYOffset < headerWidth) {
			arrow.style.display = 'none';
		};
	});

	
};

export default backToTop;