const chooseClub = () => {
    const clubSelect = document.querySelector('.club-select'),
          clubSelectUl = clubSelect.querySelector('ul'),
          header = document.querySelector('.header-main'),
          clubSelectBtn = clubSelect.querySelector('p');

    header.addEventListener('click', (elem) => {
        if (clubSelectUl.style.display === 'none' && elem.target === clubSelectBtn) {
            clubSelectUl.style.display = 'block';
        } else if (clubSelectUl.style.display = 'block' && elem.target === clubSelectBtn || elem.target.closest('.header-main')) {
                    clubSelectUl.style.display = 'none';
            };    
    });
};

export default chooseClub;