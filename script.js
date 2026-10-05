const formulario = document.getElementById("form-atendimento");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;

    const mensagem =
        "Olá! Gostaria de solicitar atendimento na Aliança Cred." +
        "\n\nNome: " + nome +
        "\nTelefone: " + telefone +
        "\nServiço de interesse: " + servico;

    const numeroWhatsApp = "5585992847470";

    const linkWhatsApp =
        "https://wa.me/" + numeroWhatsApp +
        "?text=" + encodeURIComponent(mensagem);

    window.open(linkWhatsApp, "_blank");
});
const campoTelefone = document.getElementById("telefone");

campoTelefone.addEventListener("input", function() {
    let numero = campoTelefone.value.replace(/\D/g, "");

    numero = numero.slice(0, 11);

    if (numero.length > 7) {
        numero = numero.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    } else if (numero.length > 2) {
        numero = numero.replace(/(\d{2})(\d+)/, "($1) $2");
    }

    campoTelefone.value = numero;
});