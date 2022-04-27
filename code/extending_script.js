window.onload = () => {
  render();
};

const models = [
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.01 0.01 0.01",
    rotation: "0 0 0",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.01 0.01 0.01",
    rotation: "0 90 0",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.01 0.01 0.01",
    rotation: "0 180 0",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.01 0.01 0.01",
    rotation: "0 270 0",
  },
];

let modelIndex = 0;
const setModel = (model, entity) => {
  if (model.position) {
    entity.setAttribute("position", model.position);
  }

  entity.setAttribute("gltf-model", model.url);
};

function render() {
  models.map((item) => {
    const scene = document.querySelector("a-scene");
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const model = document.createElement("a-entity");
      model.setAttribute(
        "gps-entity-place",
        `latitude: ${latitude}; longitude: ${longitude};`
      );

      setModel(item, model);

      model.setAttribute("animation-mixer", "");

      scene.appendChild(model);
    });
  });
}
