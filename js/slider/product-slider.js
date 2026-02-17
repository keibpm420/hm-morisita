/**
 * 製品ギャラリースライダー
 * - 矢印はCSSでカスタマイズ
 */
const initializeProductGallery = () => {
    const topProductGallery = document.querySelector('.js-top-product-gallery');

    if (!topProductGallery) return;

    const splide = new Splide(topProductGallery, {
        gap: '24rem',
        pagination: false,
        padding: { left: '20rem', right: '60rem' },
        mediaQuery: 'min',
        rewind: true,
        drag: false,
        breakpoints: {
            768: {
                perPage: 3,
                perMove: 1,
                padding: { left: '70rem', right: '94rem' },
                gap: '32rem',
            },
        },
    });

    splide.mount();
};

export default initializeProductGallery;
