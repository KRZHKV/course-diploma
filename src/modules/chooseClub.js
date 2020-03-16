const chooseClub = () => {
    const clubSelect = document.querySelector('.club-select'),
          clubSelectUl = clubSelect.querySelector('ul'),
          clubSelectBtn = clubSelect.querySelector('p');

    clubSelectBtn.addEventListener('click', function(elem) {
        console.log(elem.target)
        if (clubSelectUl.style.display === 'none') {
            clubSelectUl.style.display = 'block';
        } else {
            clubSelectUl.style.display = 'none';
        }
    });

};

export default chooseClub;