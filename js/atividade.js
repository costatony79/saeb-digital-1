// Correção das atividades do Meu SAEB Digital, feita no próprio navegador.
// Substitui a correção que antes acontecia no servidor (index.js).
(function () {
  const form = document.getElementById("atividade");
  const areaResultado = document.getElementById("resultado-atividade");
  if (!form || !areaResultado) return;

  const atividade = form.dataset.atividade;
  const descritor = form.dataset.descritor;
  const TOTAL = 10;

  // Desembaralha o gabarito (ver js/gabaritos.js).
  function gabarito() {
    const chave = "MeuSaebDigital" + atividade;
    const bytes = atob(window.GABARITOS[atividade]);
    let letras = "";
    for (let i = 0; i < bytes.length; i++) {
      letras += String.fromCharCode(bytes.charCodeAt(i) ^ chave.charCodeAt(i % chave.length));
    }
    return letras.split("");
  }

  function mensagem(pontos) {
    if (pontos < 4) return "Você precisa refazer a atividade. Leia com mais atenção os textos.";
    if (pontos <= 6) return "Precisa melhorar, leia os textos com mais atenção. Atente também para as opções de resposta.";
    if (pontos <= 9) return "Muito bem, mas ainda não está perfeito. Refaça com mais atenção para responder corretamente <b>TODAS</b> as questões.";
    return "<b>PERFEITO</b>, VOCÊ DOMINOU ESSE DESCRITOR! AGORA PASSE PARA OUTRO DESCRITOR E FAÇA O MESMO.";
  }

  function escapar(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
  }

  // Aviso dentro da página (antes era uma notificação no computador do servidor).
  function avisar(texto, alvo) {
    let aviso = document.getElementById("aviso-atividade");
    if (!aviso) {
      aviso = document.createElement("div");
      aviso.id = "aviso-atividade";
      aviso.className = "alert alert-warning aviso-fixo";
      aviso.setAttribute("role", "alert");
      document.body.appendChild(aviso);
    }
    aviso.innerHTML = texto;
    aviso.hidden = false;
    clearTimeout(avisar.tempo);
    avisar.tempo = setTimeout(() => (aviso.hidden = true), 6000);
    if (alvo) {
      alvo.scrollIntoView({ behavior: "smooth", block: "center" });
      if (alvo.focus) alvo.focus({ preventScroll: true });
    }
  }

  // Algumas atividades usam botões de opção; outras, uma caixinha onde o aluno
  // digita a letra. As duas formas funcionam.
  // Esconde (ou mostra de novo) as questões enquanto o resultado está na tela.
  // Inclui os blocos que, por causa do HTML, ficaram fora do formulário.
  function blocosDaAtividade() {
    // Cada bloco da página que tem o formulário, alguma questão ou os botões
    // de responder/limpar (em algumas atividades eles ficam fora do formulário).
    const alvos = [form, ...document.querySelectorAll('input[name^="q"], button[type="submit"], button[type="reset"]')];
    const blocos = new Set();
    alvos.forEach((el) => {
      let bloco = el;
      while (bloco.parentElement && bloco.parentElement !== document.body) bloco = bloco.parentElement;
      if (bloco !== areaResultado) blocos.add(bloco);
    });
    // Quebras de linha soltas entre os blocos também somem, senão fica um vazio.
    document.querySelectorAll("body > br").forEach((br) => blocos.add(br));
    return [...blocos];
  }

  function mostrarAtividade(visivel) {
    blocosDaAtividade().forEach((bloco) => (bloco.hidden = !visivel));
  }

  function respostaDe(q) {
    // Procura na página inteira: em algumas atividades o HTML deixa parte das
    // questões fora do formulário.
    const marcada = document.querySelector(`input[type="radio"][name="q${q}"]:checked`);
    if (marcada) return marcada.value.toUpperCase();
    const caixa = document.querySelector(`input:not([type="radio"])[name="q${q}"]`);
    const letra = caixa ? caixa.value.trim().toUpperCase() : "";
    return /^[A-D]$/.test(letra) ? letra : "";
  }

  // Nas caixinhas, aceita só A, B, C ou D (em maiúscula).
  document.querySelectorAll('input[name^="q"]:not([type="radio"])').forEach((caixa) => {
    caixa.setAttribute("autocomplete", "off");
    caixa.setAttribute("autocapitalize", "characters");
    caixa.setAttribute("maxlength", "1");
    caixa.addEventListener("input", () => {
      caixa.value = caixa.value.toUpperCase().replace(/[^A-D]/g, "");
    });
  });

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const campoNome = form.querySelector('input[name="name"]');
    const nome = campoNome ? campoNome.value.trim() : "";
    const respostas = Array.from({ length: TOTAL }, (_, i) => respostaDe(i + 1));
    const vazias = respostas.map((r, i) => (r ? null : i + 1)).filter(Boolean);

    if (!nome) {
      return avisar("<b>DIGITE SEU NOME.</b> Ele aparece no seu resultado.", campoNome);
    }
    if (vazias.length) {
      const primeira = document.querySelector(`input[name="q${vazias[0]}"]`);
      return avisar(
        `<b>RESPONDA TODAS AS PERGUNTAS.</b> Falta${vazias.length > 1 ? "m" : ""}: questão ${vazias.join(", ")}.`,
        primeira
      );
    }

    const certas = gabarito();
    const pontos = respostas.filter((r, i) => r === certas[i]).length;

    areaResultado.innerHTML = `
      <div class="resultado-card">
        <div class="display-4 text-center">${escapar(descritor.toUpperCase())}</div>
        <hr>
        <div class="h6">NOME:</div>
        <div class="display-5 nome-aluno">${escapar(nome.toUpperCase())}</div>
        <hr>
        <div class="h6">SUAS RESPOSTAS:</div>
        <div class="table-responsive">
          <table class="table table-dark table-hover text-center">
            <thead><tr>${respostas.map((_, i) => `<th>Q${i + 1}:</th>`).join("")}</tr></thead>
            <tbody><tr>${respostas.map((r) => `<td>${r}</td>`).join("")}</tr></tbody>
          </table>
        </div>
        <div class="display-4 text-center">RESULTADO</div>
        <hr>
        <div class="bg-primary text-white text-center p-3 h4 mb-0">Você fez ${pontos} ponto${pontos === 1 ? "" : "s"}</div>
        <div class="bg-primary text-white text-center p-3 mensagem-resultado">${mensagem(pontos)}</div>
        <hr>
        <button type="button" class="btn btn-warning btn-lg btn-block" id="refazer">REFAZER ESTA ATIVIDADE</button>
        <a href="index.html" class="btn btn-primary btn-lg btn-block">VOLTAR PARA O INÍCIO</a>
      </div>`;

    mostrarAtividade(false);
    areaResultado.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });

    document.getElementById("refazer").addEventListener("click", () => {
      form.reset();
      document.querySelectorAll('input[name^="q"]').forEach((campo) => {
        if (campo.type === "radio") campo.checked = false;
        else campo.value = "";
      });
      areaResultado.hidden = true;
      areaResultado.innerHTML = "";
      mostrarAtividade(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
})();
