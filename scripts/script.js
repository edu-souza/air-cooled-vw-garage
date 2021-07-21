/* Navegação por tabs */
const SecImages = document.querySelectorAll('.js-main-imgs ul li');
const SecDesc   = document.querySelectorAll('.js-lista-desc li');
SecDesc[0].classList.add('ativo');

if ((SecImages.length) && (SecDesc.length)) {
  function activeTab(index) {
  SecDesc.forEach(function(item){
      item.classList.remove('ativo');
  })
  SecDesc[index].classList.add('ativo')
  }

  SecImages.forEach((itemImg,index) =>{
      itemImg.addEventListener('mouseover',() =>{
        activeTab(index)
      })
  })
}

/* Accordion List */
function initFAQ() {
const termos = document.querySelectorAll('.faq-lista dt');
if (termos.length) {
termos.forEach((item) => {
  item.addEventListener('click',() => {
    activeDT(item);
  })
})
function activeDT(item){
    item.nextElementSibling.classList.toggle('DTativo');
  }
} 
}
initFAQ();


/* Scroll suave (não suportado em browsers antigos) */
function SmoothScroll(){
    const links = document.querySelectorAll('.menu-nav ul li a');
    function ScrolltoSec(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      const topo = section.offsetTop;
      window.scrollTo({
        top: topo,
        behavior: 'smooth',
      });
    }
        
    links.forEach((link) => {
      link.addEventListener('click', ScrolltoSec);
    })  
}
SmoothScroll()

/* Animação ao scroll */
function initAnimaScroll(){

    function AnimaScroll() {
      const secs = document.querySelectorAll('.js-scroll');
      const windowHalf = window.innerHeight * 0.7;
      secs.forEach((section) => {
        const SecTop = (section.getBoundingClientRect().top - windowHalf) < 0;
          if (SecTop) {
            section.classList.add('ativo');
          }
      })
    }
    window.addEventListener('scroll',AnimaScroll);
    AnimaScroll()
}
initAnimaScroll()

/* Slides Projetos */









