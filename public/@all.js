const scrollBack = document.querySelector('.scroll-back');

scrollBack.classList.toggle('hide', scrollY <= 40);

document.addEventListener('scroll', () => {
    scrollBack.classList.toggle('hide', scrollY <= 40);
});

scrollBack.addEventListener('click', () => {
    scroll({
        behavior: "smooth",
        top: 0
    });
});