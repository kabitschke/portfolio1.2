function monitorarLarguraDaTela() {
  // Obtém a largura atual da tela
  let largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// if(largura < 500){
//   document.querySelector('.header').style = "display:none";
//   document.querySelector('.header_mobile').style = "display:flex";
// }else{
//   document.querySelector('.header').style = "display:flex";
//   document.querySelector('.header_mobile').style = "display:none";
// }
  // Faça algo com a largura da tela
  console.log('Largura da tela:', largura);
}

// Registra o evento de redimensionamento
window.addEventListener('resize', monitorarLarguraDaTela);

// Chama a função pela primeira vez
monitorarLarguraDaTela();
