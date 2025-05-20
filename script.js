const desculpas = [
  "Meu cachorro comeu meu controle.",
  "Minha internet caiu justo na hora.",
  "O sistema do jogo deu crash, não foi minha culpa!",
  "Fui atacado por um lag monstruoso.",
  "Meu PC reiniciou sozinho, juro!",
  "Esqueci de salvar o progresso.",
  "Tava esperando a próxima atualização.",
  "Meu irmão puxou o cabo da internet.",
  "Meu teclado travou na hora.",
  "O servidor caiu e me desconectou.",
  "Estava configurando a stream e deu ruim.",
  "O chefe chegou do nada, tive que pausar.",
  "Meu amigo veio na hora e pedi ajuda.",
  "O jogo ficou bugado na minha missão.",
  "O chat começou a trolar geral.",
  "Recebi uma chamada urgente do time.",
  "Meu headset parou de funcionar.",
  "O Windows atualizou na hora errada.",
  "Tava só testando um bug do jogo.",
  "Meu PC superaqueceu e desligou."
];

const btn = document.getElementById("gerar-btn");
const box = document.getElementById("desculpa-box");
const contador = document.getElementById("contador");

let count = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function piscarDesculpa(text) {
  for(let i = 0; i < 3; i++) {
    box.style.visibility = "hidden";
    await sleep(150);
    box.style.visibility = "visible";
    await sleep(150);
  }
  box.textContent = text;
}

btn.addEventListener("click", async () => {
  btn.classList.add("pulse");
  setTimeout(() => {
    btn.classList.remove("pulse");
  }, 800);

  count++;
  const novaDesculpa = desculpas[Math.floor(Math.random() * desculpas.length)];
  await piscarDesculpa("Carregando...");
  await sleep(300);
  await piscarDesculpa(novaDesculpa);
  contador.textContent = `Desculpas geradas: ${count}`;
});
