// Pega os elementos que precisam mudar de acordo com o campo "Urgente?"
const campoUrgencia = document.getElementById("urgencia"); // o <select> Sim/Não
const motivoUrgencia = document.getElementById("urg-motivo"); // o <select> do motivo
const labelMotivoUrgencia = document.querySelector('label[for="urg-motivo"]'); // o <label> do motivo

// Essa função decide se o campo de motivo aparece ou não,
// de acordo com o valor atual do select "Urgente?"
function AtualizarMotivoUrgencia() {
  if (campoUrgencia.value === "sim") {
    // Tira a classe que esconde (display: none) -> campo aparece
    motivoUrgencia.classList.remove("escondido");
    labelMotivoUrgencia.classList.remove("escondido");

    // Faz o campo voltar a ser obrigatório, já que agora ele está visível
    motivoUrgencia.required = true;
  } else {
    // Coloca a classe de volta -> campo some de novo
    motivoUrgencia.classList.add("escondido");
    labelMotivoUrgencia.classList.add("escondido");

    // Tira a obrigatoriedade e limpa o valor,
    // pra não travar o envio do formulário com um campo invisível e vazio
    motivoUrgencia.required = false;
    motivoUrgencia.value = "";
  }
}

// "Escuta" o select Urgente? -> toda vez que o valor mudar,
// o navegador dispara o evento "change" e chama a função acima
campoUrgencia.addEventListener("change", AtualizarMotivoUrgencia);

const campoDataProgramacao = document.getElementById("dataprog");
const hoje = new Date();

campoDataProgramacao.value = [
  hoje.getFullYear(),
  String(hoje.getMonth() + 1).padStart(2, "0"),
  String(hoje.getDate()).padStart(2, "0"),
].join("-");
