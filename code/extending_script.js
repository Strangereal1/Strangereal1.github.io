window.onload = () => {
  render();
};

const models = [
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.5 0.5 0.5",
    rotation: "0 0 0",
    position: "0 0 0",
    color: "yellow",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "1 1 1",
    rotation: "0 90 0",
    position: "300 0 300",
    color: "red",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "2 2 2",
    rotation: "0 180 0",
    position: "1000 1000 0",
    color: "blue",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.1 0.1 0.1",
    rotation: "0 270 0",
    position: "0 500 500",
    color: "green",
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
        `latitude: ${latitude}; longitude: ${longitude};`
      );
      model.setAttribute("position", item.position);
      model.setAttribute("scale", item.scale);
      model.setAttribute("rotation", item.rotation);
      model.setAttribute("color", item.color);

      model.setAttribute("animation-mixer", "");
      scene.appendChild(model);
      console.log("%O", model);
    });
  });
}
