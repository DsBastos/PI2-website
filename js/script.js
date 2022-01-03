function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // Quando o 'scroll' é maior que 560 de altura da 'viewport', adicionar a classe 'show-scroll' para a tag com 'scrollUp'
  if(this.scrollY >= 100) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);