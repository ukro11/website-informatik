const textElement = document.querySelector('.nav-text-2');
const span = document.querySelector('.nav-text-2-span');
const text = document.querySelector('.nav-text-2-p');

span.classList.toggle('hide-span', true);
text.classList.toggle('is-hidden', true);

textElement.addEventListener('mouseover', () => {
    span.classList.toggle('hide-span', false);
    text.classList.toggle('is-hidden', false);
});

textElement.addEventListener('mouseout', () => {
    span.classList.toggle('hide-span', true);
    text.classList.toggle('is-hidden', true);
});


const profile = document.querySelector('.nav-text-profile');
const profile_span = document.querySelector('.nav-text-profile-span');
const profile_text = document.querySelector('#nav-text-profile-text');
const profile_icon = document.querySelector('#nav-text-profile-text');

profile.addEventListener('mouseover', () => {
    profile_span.classList.toggle('hide-span', false);
    profile_text.classList.toggle('is-hidden', false);
    profile_icon.classList.toggle('is-hidden', false);
});

profile.addEventListener('mouseout', () => {
    profile_span.classList.toggle('hide-span', true);
    profile_text.classList.toggle('is-hidden', true);
    profile_icon.classList.toggle('is-hidden', false);
});