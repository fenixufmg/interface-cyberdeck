// Função para criar gráfico usando Chart.js
function createChart(containerId) {
  const container = document.getElementById(containerId);
  const canvas = document.createElement("canvas");
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          borderColor: "#282c34",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
      },
    },
  });
}

// Função para atualizar gráfico com novos dados
function updateChart(chart, newDataPoint) {
  chart.data.labels.push(new Date().toLocaleTimeString());
  chart.data.datasets[0].data.push(newDataPoint);
  chart.update();
}

// Simulação de dados para os gráficos (substitua pelos seus dados reais)
const acelerometroChart = createChart("acelerometroChart");
const altimetroChart = createChart("altimetroChart");
const giroscopioChart = createChart("giroscopioChart");
const velocimetroChart = createChart("velocimetroChart");

setInterval(() => updateChart(acelerometroChart, Math.floor(Math.random() * 50) + 10), 50);
setInterval(() => updateChart(altimetroChart, Math.floor(Math.random() * 60) + 10), 50);
setInterval(() => updateChart(giroscopioChart, Math.floor(Math.random() * 70) + 10), 50);
setInterval(() => updateChart(velocimetroChart, Math.floor(Math.random() * 80) + 10), 50);
