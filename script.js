
function enviarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const loja = document.getElementById('loja').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá! Meu nome é ${nome}, da loja ${loja}. Gostaria de uma demonstração do sistema StockLigeiro.\n${mensagem}`;
  const url = `https://wa.me/258863727760?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
  return false;
}
