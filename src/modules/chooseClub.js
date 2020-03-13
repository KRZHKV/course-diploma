const chooseClub = function () {
    const clubSelect = document.querySelector('.club-select'),
          clubSelectUl = clubSelect.querySelector('ul'),
          clubSelectBtn = clubSelect.querySelector('p');

    clubSelectBtn.addEventListener('click', function() {
        if (clubSelectUl.style.display === 'none') {
            clubSelectUl.style.display = 'flex';
        } else {
            clubSelectUl.style.display = 'none';
        }
    });

};

export default chooseClub;