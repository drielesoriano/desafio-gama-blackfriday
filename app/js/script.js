console.log('Teste rodando js')

const headerLinks = document.getElementById('header__links');
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-toggle-close');
const menuLinks = document.getElementById('header-menu');

if(menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.add('menu--active');
    menuClose.classList.remove('hiden');
    menuLinks.classList.remove('hide');
    
  })
}

if(menuClose) {
  menuClose.addEventListener('click', () => {
    menuToggle.classList.remove('menu--active');
    menuClose.classList.add('hiden');
    menuLinks.classList.add('hide');
  })
}

const cta = document.getElementById('hero-cta');
const submit = document.getElementById('submit');
const span = document.getElementById('message');

//LocalStorage Email
function saveEmail() {
  let email = document.getElementById('email').value;
  localStorage.setItem('email', email)
}

submit.addEventListener('click', function(e){
  cta.classList.add('hide');
  span.style.color = "#FFC727";
  span.style.fontSize = "0.9rem"
  span.innerHTML = "E-mail cadastrado com sucesso!"  
});


