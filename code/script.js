window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      name: "Magnemite1",
      location: {
        lat: 44.49647,
        lng: 11.32018,
      },
    },
    {
      name: "Magnemite2",
      location: {
        lat: 39.91092455,
        lng: 116.4133837,
      },
    },
    {
      name: "Magnemite3",
      location: {
        lat: 40.072820063960634,
        lng: 116.318075997769877,
      },
    },
    {
      name: "Magnemite4",
      location: {
        lat: 40.0728,
        lng: 116.318,
      },
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement("a-entity");
    model.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    model.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");
    model.setAttribute("rotation", "0 180 0");
    model.setAttribute("animation-mixer", "");
    model.setAttribute("scale", "0.005 0.005 0.005");

    model.addEventListener("loaded", () => {
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    scene.appendChild(model);
  });
}
