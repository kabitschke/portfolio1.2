const conhecimento = document.querySelectorAll('.conhecimento');
const descricao = document.querySelectorAll('.texto-descricao');
const conhecimentoDesc = [
  'HTML É uma linguagem de marcação utilizada na construção de páginas na Web.',
  'CSS É um mecanismo para adicionar estilo a um documento web.',
  'JavaScript É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.',
  'Github É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.',
  'WordPress é um sistema livre e aberto de gestão de conteúdo para internet, baseado em PHP com banco de dados MySQL',
  'Git É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.',
];

conhecimento.forEach((elemento, index) => {
  //area das habilidades

  elemento.addEventListener('mouseover', () => {
    //onde o mouse passar por cima
    descricao[
      index
    ].innerHTML = `${conhecimentoDesc[index]}`; //Preenche com conteudo do array com index do foreach
  });
  // elemento.addEventListener('mouseout', () => {
  //   //Retirou o mouse preenche com o conteudo abaixo
  //   descricao[index].innerHTML = '';

  // });
});