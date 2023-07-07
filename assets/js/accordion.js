function initAccordion() {
    //Declaração das Constantes
    const sALL = (e) => document.querySelectorAll(e);
    const accordionList = sALL('.projeto-head');
    const active = 'ativo';
  
    if (accordionList.length) {
      accordionList[0].classList.toggle(active); //toggle troca as classes toda vez que é clicado
      accordionList[0].nextElementSibling.classList.toggle(active);
  
      function activeAccordion() {
        this.classList.toggle(active); //faz referencia ao item clicado no momento
        this.nextElementSibling.classList.toggle(active); //nextElementSibling proximo elemento filho
      }
  
      accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
      });
    }
  }
  
  initAccordion();