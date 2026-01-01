document.addEventListener("DOMContentLoaded", () => {

  const btnOrcamento = document.querySelector(".btn-orcamento");

  if (!btnOrcamento) return;

  btnOrcamento.addEventListener("click", () => {

    const produto = btnOrcamento.dataset.produto || "Produto Drywall";

    const mensagem = `
Olá! 👋
Tenho interesse no produto abaixo:

📌 *${produto}*

Poderia me informar:
• Valor
• Disponibilidade
• Prazo de entrega

Obrigado!
    `.trim();

    const numeroWhatsApp = "5521999999999";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });

});
