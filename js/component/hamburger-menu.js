/**
 * ハンバーガーメニュー
 */
const initializeHamburgerMenu = () => {
    const menu = document.querySelector('.js-header-menu');
    const openButton = document.querySelector('.js-header-menu-open-button');
    const closeButton = document.querySelector('.js-header-menu-close-button');

    if (!menu || !openButton || !closeButton) return;

    const openingKeyframes = [
        {
            opacity: 1,
        },
    ];

    const openingOptions = {
        duration: 150,
        easing: 'ease',
        fill: 'forwards',
    };

    const closingKeyframes = {
        opacity: 0,
    };

    const closingOptions = {
        duration: 150,
        easing: 'ease',
        fill: 'forwards',
    };

    const openMenu = () => {
        menu.showModal();
        document.body.style.overflow = 'hidden';
        menu.animate(openingKeyframes, openingOptions);
    };

    const closeMenu = () => {
        const closingAnim = menu.animate(closingKeyframes, closingOptions);

        closingAnim.onfinish = () => {
            menu.close();
            document.body.style.overflow = '';
        };
    };

    openButton.addEventListener('click', openMenu);

    closeButton.addEventListener('click', closeMenu);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            e.preventDefault();
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && menu.open) {
            closeMenu();
        }
    });
};

export default initializeHamburgerMenu;
