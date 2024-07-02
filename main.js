const burger = document.querySelector('.burger');

burger.addEventListener('click', (evt) => {
    let expanded = evt.currentTarget.getAttribute('aria-expanded') == 'true' ? true : false;
    evt.currentTarget.setAttribute('aria-expanded', !expanded);
    document.body.classList.toggle('.crop')
})