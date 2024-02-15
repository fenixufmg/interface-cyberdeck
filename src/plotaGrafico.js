import Chart from "chart.js/auto";

document.addEventListener("DOMContentLoaded", function () {
  // Criação de gráficos para cada div específica
  const acelerometroChart = createChart("acelerometro", "Acelerômetro");
  const altimetroChart = createChart("altimetro", "Altímetro");
  const giroscopioChart = createChart("giroscopio", "Giroscópio");
  const velocimetroChart = createChart("velocimetro", "Velocímetro");

  function createChart(containerId, label) {
    const container = document.getElementById(containerId);
    const canvas = document.createElement("canvas");
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: [], // Adicione seus rótulos de tempo aqui
        datasets: [
          {
            label: label,
            data: [],
            borderColor: "rgba(75, 192, 192, 1)",
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
      },
    });
  }

  function updateChart(chart, newDataPoint) {
    // Atualiza o gráfico com novos dados
    chart.data.labels.push(new Date().toLocaleTimeString()); // Adicione rótulo de tempo atual
    chart.data.datasets[0].data.push(newDataPoint); // Adicione novo ponto de dados
    chart.update();
  }

  // Simulação de dados para os gráficos (substitua pelos seus dados reais)
  setInterval(
    () => updateChart(acelerometroChart, Math.floor(Math.random() * 50) + 10),
    5000
  );
  setInterval(
    () => updateChart(altimetroChart, Math.floor(Math.random() * 50) + 10),
    5000
  );
  setInterval(
    () => updateChart(giroscopioChart, Math.floor(Math.random() * 50) + 10),
    5000
  );
  setInterval(
    () => updateChart(velocimetroChart, Math.floor(Math.random() * 50) + 10),
    5000
  );
});
