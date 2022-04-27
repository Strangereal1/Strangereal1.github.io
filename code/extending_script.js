window.onload = () => {
  render();
};

const models = [
  {
    url: "assets/magnemite/scene.gltf",
	scale: "0.05 0.05 0.05",
    rotation: "0 0 0",
    position: "0",
    color: "yellow",
  },
  {
    url: "assets/magnemite/scene.gltf",
	scale: "0.05 0.05 0.05",
    rotation: "0 90 0",
    position: "1",
    color: "red",
  },
  {
    url: "assets/magnemite/scene.gltf",
	scale: "0.05 0.05 0.05",
    rotation: "0 180 0",
    position: "2",
    color: "blue",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.05 0.05 0.05",
    rotation: "0 270 0",
    position: "3",
    color: "green",
  },
];


function render() {
  const scene = document.querySelector("a-scene");

  models.map((item) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const model = document.createElement("a-enity");
      model.setAttribute(
        "gps-entity-place",
        `latitude: ${latitude}; longitude: ${longitude};`
      );
      model.setAttribute("position", item.position);
      model.setAttribute("scale", item.scale);
      model.setAttribute("rotation", item.rotation);
      model.setAttribute("color", item.color);
      model.setAttribute("gltf-model", item.url);

      model.setAttribute("animation-mixer", "");
      scene.appendChild(model);
      console.log("%O", model);
    });
  });
}
