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
      itemImg.addEventListener('mouseenter',() =>{
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
      const MetadeJanela = window.innerHeight * 0.7;
      secs.forEach((section) => {
        const SecTop = (section.getBoundingClientRect().top - MetadeJanela) < 0;
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

function trocaImg(index) {
  const Imgs = document.querySelectorAll('.slides .img-slide');
  if (true) {
     Imgs.forEach((item) => {
      item.classList.remove('ativo');
    }) 
    Imgs[index].classList.add('ativo');
  }
}

const btns = document.querySelectorAll('.slide-btn');
btns.forEach((item,index) => {
  item.addEventListener('click',() => {
    trocaImg(index);
  });
})


/* ============================================== */
function validaForm() {
  let form = document.forms[0].checkValidity();
  if (!document.forms[0].checkValidity()) {
    alert("Favor preencher todos os campos");
    return false;
  }
  return true
}

function initAgendamento() {
  function VerificaOpc(atributo) {
    if(atributo === 'btnAgendar') {
      if(validaForm()) {
        Agendar()
      }
    }  else if (atributo === 'btnExcluir') {
      Excluir()
    }
  }

  function Agendar() {
    let Lista = document.querySelectorAll('.lista-agenda ul');
    let os =  (document.getElementById('modelo').value) + (document.getElementById('ano').value) + '  ' + 'Placa: ' +(document.getElementById('placa').value) + '   '+ (document.getElementById('dono').value);
    let NovoLi = document.createElement('li');
    NovoLi.classList.add('tmark');
    let NovoInput = document.createElement('input');
    NovoInput.setAttribute('type','checkbox');
    NovoLi.appendChild(NovoInput);
    let NovoSpan = document.createElement('span');
    NovoSpan.innerHTML = os
    NovoLi.appendChild(NovoSpan);
    Lista[0].appendChild(NovoLi);
  }

  function Excluir() {
    let AuxExclui = document.getElementsByClassName('tmark');
    let Exclui = Array.from(AuxExclui);
    let ForDelete = [];
    //let Deleting = [];
    let i = 0;
    Exclui.forEach((item) => {
      if (item.children[0].checked == true) {
        ForDelete.push(item.children[0]);
        ForDelete.push(item.children[1]);
        ForDelete.push(item);}}
    )
      
      for (i = 0; i < ForDelete.length;i++) {
        ForDelete[i].remove();
     } //end For
  } //end Excluir()

  const btns1 = document.getElementsByClassName('btn');
  const btnsAgenda = Array.from(btns1);
  btnsAgenda.forEach((item) => {
      item.addEventListener('click',() => {
        VerificaOpc(item.getAttribute('id'))
      } )  
  })
}
initAgendamento()

