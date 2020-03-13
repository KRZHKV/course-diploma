const freeVisit = function() {
    const freeVisitBtn = document.querySelector('.free-visit');
    const freeVisitPopup = document.getElementById('free_visit_form');

    freeVisitBtn.addEventListener('click', function() {
        freeVisitPopup.style.display = 'block';
    });

    freeVisitPopup.addEventListener('click', function(event) {
        let target = event.target;
        if ( target.classList.contains('overlay') || target.classList.contains('close_icon') ) {
            freeVisitPopup.style.display = 'none';
        };
    });
};

export default freeVisit;