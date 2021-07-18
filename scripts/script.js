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
 
 







