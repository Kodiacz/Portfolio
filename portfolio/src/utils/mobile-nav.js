const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    // State
    let open = false;

    headerBtn.addEventListener('click', () => {
        open = !open;

        if (open) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden;'
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            open = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
}

export default mobileNav;