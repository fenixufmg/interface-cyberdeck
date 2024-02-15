// Abrindo o mapa com centro na UFMG e o zoom
const map = L.map("map").setView(
  [-19.870553062661006, -43.96775991703787],
  15,
  {
    maxZoom: 21,
    zoomControl: true,
  }
);

// Atribuição requerida pelo OPSM para usar o seu mapa, é obrigatório pela licença
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(
  tileUrl,
  {
    maxZoom: 21,
    maxNativeZoom: 19,
  },
  { attribution }
);
tiles.addTo(map);


