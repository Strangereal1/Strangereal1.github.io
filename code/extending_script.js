window.onload = () => {
  render();
};

const models = [
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.01 0.01 0.01",
    rotation: "0 0 0",
    position: "0 0 0",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.01 0.01 0.01",
    rotation: "0 90 0",
    position: "30 0 30",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.01 0.01 0.01",
    rotation: "0 180 0",
    position: "30 30 0",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.01 0.01 0.01",
    rotation: "0 270 0",
    position: "0 30 30",
  },
];

let modelIndex = 0;
const setModel = (model, entity) => {
  //   entity.setAttribute("position", model.position);
  //   entity.setAttribute("rotation", model.rotation);
  entity.setAttribute("gltf-model", model.url);
  //   entity.setAttribute("scale", model.scale);
};

function render() {
  const scene = document.querySelector("a-scene");

  models.map((item) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const model = document.createElement("a-box");
      model.setAttribute(
        "gps-entity-place",
        `latitude: ${latitude}; longitude: ${longitude};`,
        // `position: ${item.position}`,
        // `rotation: ${item.rotation}`,
        // `scale: ${item.scale}`
      );

    //   setModel(item, model);

      model.setAttribute("animation-mixer", "");
      scene.appendChild(model);
      console.log("%O", model);
    });
  });
}
