document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const conteudoApp = document.getElementById("conteudo");

  window.addEventListener("load", () => {
    setTimeout(() => {
      if (loader) {
        loader.classList.add("fade-out"); // some com o loader
      }
      if (conteudoApp) {
        conteudoApp.classList.add("fade-in"); // mostra o app
      }
    }, 3000); // 3 segundos (pode mudar)
  });
});
// ... (Se você tem código da galáxia que não precisa dos elementos, pode ficar aqui embaixo)
// ===== Fundo estilo Galáxia =====
const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrelas = [];
for (let i = 0; i < 200; i++) {
  estrelas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    raio: Math.random() * 2,
    velocidade: Math.random() * 0.5 + 0.2,
  });
}

function animar() {
  ctx.fillStyle = "rgba(29, 16, 41, 0.84)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.beginPath();
  estrelas.forEach((estrela) => {
    ctx.moveTo(estrela.x, estrela.y);
    ctx.arc(estrela.x, estrela.y, estrela.raio, 0, Math.PI * 2);
  });
  ctx.fill();

  estrelas.forEach((estrela) => {
    estrela.y += estrela.velocidade;
    if (estrela.y > canvas.height) {
      estrela.x = Math.random() * canvas.width;
      estrela.y = 0;
    }
  });

  requestAnimationFrame(animar);
}
animar();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ===== tabela PT100 0..150 (valores em ohms) =====
const tabelaPT100 = [
  { t: 0, R: 100.0 },
  { t: 1, R: 100.39 },
  { t: 2, R: 100.78 },
  { t: 3, R: 101.17 },
  { t: 4, R: 101.56 },
  { t: 5, R: 101.95 },
  { t: 6, R: 102.34 },
  { t: 7, R: 102.73 },
  { t: 8, R: 103.12 },
  { t: 9, R: 103.51 },
  { t: 10, R: 103.9 },
  { t: 11, R: 104.29 },
  { t: 12, R: 104.68 },
  { t: 13, R: 105.07 },
  { t: 14, R: 105.46 },
  { t: 15, R: 105.85 },
  { t: 16, R: 106.24 },
  { t: 17, R: 106.63 },
  { t: 18, R: 107.02 },
  { t: 19, R: 107.4 },
  { t: 20, R: 107.79 },
  { t: 21, R: 108.18 },
  { t: 22, R: 108.57 },
  { t: 23, R: 108.96 },
  { t: 24, R: 109.35 },
  { t: 25, R: 109.74 },
  { t: 26, R: 110.13 },
  { t: 27, R: 110.52 },
  { t: 28, R: 110.91 },
  { t: 29, R: 111.3 },
  { t: 30, R: 111.67 },
  { t: 31, R: 112.05 },
  { t: 32, R: 112.44 },
  { t: 33, R: 112.83 },
  { t: 34, R: 113.22 },
  { t: 35, R: 113.61 },
  { t: 36, R: 114.0 },
  { t: 37, R: 114.39 },
  { t: 38, R: 114.78 },
  { t: 39, R: 115.17 },
  { t: 40, R: 115.54 },
  { t: 41, R: 115.92 },
  { t: 42, R: 116.31 },
  { t: 43, R: 116.7 },
  { t: 44, R: 117.09 },
  { t: 45, R: 117.48 },
  { t: 46, R: 117.87 },
  { t: 47, R: 118.26 },
  { t: 48, R: 118.65 },
  { t: 49, R: 119.04 },
  { t: 50, R: 119.4 },
  { t: 51, R: 119.78 },
  { t: 52, R: 120.17 },
  { t: 53, R: 120.56 },
  { t: 54, R: 120.95 },
  { t: 55, R: 121.34 },
  { t: 56, R: 121.73 },
  { t: 57, R: 122.12 },
  { t: 58, R: 122.51 },
  { t: 59, R: 122.9 },
  { t: 60, R: 123.29 },
  { t: 61, R: 123.67 },
  { t: 62, R: 124.06 },
  { t: 63, R: 124.45 },
  { t: 64, R: 124.84 },
  { t: 65, R: 125.23 },
  { t: 66, R: 125.62 },
  { t: 67, R: 126.01 },
  { t: 68, R: 126.4 },
  { t: 69, R: 126.79 },
  { t: 70, R: 127.18 },
  { t: 71, R: 127.57 },
  { t: 72, R: 127.95 },
  { t: 73, R: 128.34 },
  { t: 74, R: 128.73 },
  { t: 75, R: 129.12 },
  { t: 76, R: 129.51 },
  { t: 77, R: 129.9 },
  { t: 78, R: 130.29 },
  { t: 79, R: 130.68 },
  { t: 80, R: 131.07 },
  { t: 81, R: 131.46 },
  { t: 82, R: 131.85 },
  { t: 83, R: 132.23 },
  { t: 84, R: 132.62 },
  { t: 85, R: 133.01 },
  { t: 86, R: 133.4 },
  { t: 87, R: 133.79 },
  { t: 88, R: 134.18 },
  { t: 89, R: 134.57 },
  { t: 90, R: 134.96 },
  { t: 91, R: 135.35 },
  { t: 92, R: 135.74 },
  { t: 93, R: 136.13 },
  { t: 94, R: 136.51 },
  { t: 95, R: 136.9 },
  { t: 96, R: 137.29 },
  { t: 97, R: 137.68 },
  { t: 98, R: 138.07 },
  { t: 99, R: 138.46 },
  { t: 100, R: 138.5 },
  { t: 101, R: 138.89 },
  { t: 102, R: 139.28 },
  { t: 103, R: 139.67 },
  { t: 104, R: 140.06 },
  { t: 105, R: 140.45 },
  { t: 106, R: 140.84 },
  { t: 107, R: 141.23 },
  { t: 108, R: 141.62 },
  { t: 109, R: 142.01 },
  { t: 110, R: 142.4 },
  { t: 111, R: 142.79 },
  { t: 112, R: 143.18 },
  { t: 113, R: 143.57 },
  { t: 114, R: 143.96 },
  { t: 115, R: 144.35 },
  { t: 116, R: 144.74 },
  { t: 117, R: 145.13 },
  { t: 118, R: 145.52 },
  { t: 119, R: 145.91 },
  { t: 120, R: 146.3 },
  { t: 121, R: 146.69 },
  { t: 122, R: 147.08 },
  { t: 123, R: 147.47 },
  { t: 124, R: 147.86 },
  { t: 125, R: 148.25 },
  { t: 126, R: 148.64 },
  { t: 127, R: 149.03 },
  { t: 128, R: 149.42 },
  { t: 129, R: 149.81 },
  { t: 130, R: 150.2 },
  { t: 131, R: 150.59 },
  { t: 132, R: 150.98 },
  { t: 133, R: 151.37 },
  { t: 134, R: 151.76 },
  { t: 135, R: 152.15 },
  { t: 136, R: 152.54 },
  { t: 137, R: 152.93 },
  { t: 138, R: 153.32 },
  { t: 139, R: 153.71 },
  { t: 140, R: 154.1 },
  { t: 141, R: 154.49 },
  { t: 142, R: 154.88 },
  { t: 143, R: 155.27 },
  { t: 144, R: 155.66 },
  { t: 145, R: 156.05 },
  { t: 146, R: 156.44 },
  { t: 147, R: 156.83 },
  { t: 148, R: 157.22 },
  { t: 149, R: 157.61 },
  { t: 150, R: 158.0 },
  { t: 151, R: 158.39 },
  { t: 152, R: 158.78 },
  { t: 153, R: 159.17 },
  { t: 154, R: 159.56 },
  { t: 155, R: 159.95 },
  { t: 156, R: 160.34 },
  { t: 157, R: 160.73 },
  { t: 158, R: 161.12 },
  { t: 159, R: 161.51 },
  { t: 160, R: 161.9 },
  { t: 161, R: 162.29 },
  { t: 162, R: 162.68 },
  { t: 163, R: 163.07 },
  { t: 164, R: 163.46 },
  { t: 165, R: 163.85 },
  { t: 166, R: 164.24 },
  { t: 167, R: 164.63 },
  { t: 168, R: 165.02 },
  { t: 169, R: 165.41 },
  { t: 170, R: 165.8 },
  { t: 171, R: 166.19 },
  { t: 172, R: 166.58 },
  { t: 173, R: 166.97 },
  { t: 174, R: 167.36 },
  { t: 175, R: 167.75 },
  { t: 176, R: 168.14 },
  { t: 177, R: 168.53 },
  { t: 178, R: 168.92 },
  { t: 179, R: 169.31 },
  { t: 180, R: 169.7 },
  { t: 181, R: 170.09 },
  { t: 182, R: 170.48 },
  { t: 183, R: 170.87 },
  { t: 184, R: 171.26 },
  { t: 185, R: 171.65 },
  { t: 186, R: 172.04 },
  { t: 187, R: 172.43 },
  { t: 188, R: 172.82 },
  { t: 189, R: 173.21 },
  { t: 190, R: 173.6 },
  { t: 191, R: 173.99 },
  { t: 192, R: 174.38 },
  { t: 193, R: 174.77 },
  { t: 194, R: 175.16 },
  { t: 195, R: 175.55 },
  { t: 196, R: 175.94 },
  { t: 197, R: 176.33 },
  { t: 198, R: 176.72 },
  { t: 199, R: 177.11 },
  { t: 200, R: 177.5 },
];

// === elementos DOM ===
const faixaEl = document.getElementById("faixa"); // select: 100 ou 150
const resEl = document.getElementById("res"); // input resistência (Ω)
const saidaEl = document.getElementById("saida"); // output mA
const tempEl = document.getElementById("saidaTemp"); // output temperatura
const btn = document.getElementById("btnCalcular");

// === função: converte resistência -> temperatura via interpolação linear ===
function resistenciaParaTemperatura(R) {
  if (isNaN(R)) return null;
  const pts = tabelaPT100;

  // fora do intervalo da tabela
  if (R < pts[0].R || R > pts[pts.length - 1].R) return null;

  // procurar intervalo onde R_i <= R <= R_{i+1}
  for (let i = 0; i < pts.length - 1; i++) {
    const p1 = pts[i],
      p2 = pts[i + 1];
    if ((R >= p1.R && R <= p2.R) || (R >= p2.R && R <= p1.R)) {
      const frac = (R - p1.R) / (p2.R - p1.R);
      const temp = p1.t + frac * (p2.t - p1.t);
      return temp;
    }
  }

  // caso exato no ultimo ponto
  if (R === pts[pts.length - 1].R) return pts[pts.length - 1].t;
  return null;
}

// === função principal: calcula temperatura + 4-20 mA ===
function calcular() {
  const faixa = parseInt(faixaEl.value, 10); // 50, 100, 150 ou 200
  const R = parseFloat(resEl.value);

  // validações
  if (isNaN(R)) {
    alert("Digite a resistência (Ω).");
    return;
  }

  // ATUALIZADO: Inclui a faixa 50 na validação
  if (![50, 100, 150, 200].includes(faixa)) {
    alert("Selecione a faixa (50, 100, 150 ou 200).");
    return;
  }

  const temp = resistenciaParaTemperatura(R);
  // ... (o restante da função calcular() permanece o mesmo) ...

  // ... (e o restante do seu script, incluindo a tabelaPT100 completa, permanece o mesmo) ...
  if (temp === null) {
    tempEl.value = "Fora da tabela";
    saidaEl.value = "—";
    return;
  }

  // mA: 4 + (temp / faixa) * 16
  let mA = 4 + (temp / faixa) * 16;
  if (mA < 4) mA = 4;
  if (mA > 20) mA = 20;

  // exibir resultados (formatados)
  tempEl.value = temp.toFixed(2) + " °C";
  saidaEl.value = mA.toFixed(2) + " mA";
}

// ligar botão e permitir Enter no campo resistência
btn.addEventListener("click", calcular);
resEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") calcular();
});
