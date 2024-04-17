const wrapper = document.querySelector('.wrapper');
const Loginlink = document.querySelector('.login-link');
const Registerlink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnLogin-pop');
const IconClose = document.querySelector('.icon-close');
const HeaderWrapper = document.querySelector('.header-wrapper');

Registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

Loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnLogin.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

IconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});



// btnLogin-pop.onclick(toggleHide());



