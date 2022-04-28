window.onload = () => {
  render();
};

const models = [
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    position: "0 -10 0",
    color: "yellow",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.005 0.01 0.01",
    rotation: "0 90 0",
    position: "0 -10 0",
    color: "red",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.05 0.05 0.05",
    rotation: "0 270 0",
    position: "0 5 0",
    color: "blue",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.05 0.05 0.05",
    rotation: "0 270 0",
    position: "0 10 0",
    color: "green",
  },
];

// let modelIndex = 0;
const setModel = (model, entity) => {
  if (model.position) {
    entity.setAttribute("position", model.position);
  }

  //   if (model.scale) {
  //     entity.setAttribute("scale", model.scale);
  //   }

  entity.setAttribute("gltf-model", model.url);
  //   entity.setAttribute("color", model.color);
  entity.setAttribute("rotation", model.rotation);
};

const modelIndex = 0;
function render() {
  const scene = document.querySelector("a-scene");

  navigator.geolocation.getCurrentPosition(function (position) {
    // const latitude = position.coords.latitude;
    // const longitude = position.coords.longitude;
    const latitude = 40.065662;
    const longitude = 116.311533;

    const model = document.createElement("a-enity");
    model.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );

    setModel(models[modelIndex], model);

    console.log(model);

    model.setAttribute("animation-mixer", "");

    scene.appendChild(model);
  });
}
