window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      name: "Magnemite",
      location: {
        lat: 44.49647, // latitute
        lng: 11.32018, //
      },
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model_1 = document.createElement("a-entity");
    model_1.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    model_1.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");
    model_1.setAttribute("rotation", "0 180 0");
    model_1.setAttribute("animation-mixer", "");
    model_1.setAttribute("scale", "0.5 1 0.5");

    model_1.addEventListener("loaded", () => {
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    scene.appendChild(model_1);

    // let model_2 = document.createElement("a-entity");
    // model_2.setAttribute(
    //   "gps-entity-place",
    //   `latitude: ${latitude}; longitude: ${longitude};`
    // );
    // model_2.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");
    // model_2.setAttribute("rotation", "0 0 0");
    // model_2.setAttribute("animation-mixer", "");
    // model_2.setAttribute("scale", "0.5 0.5 0.5");

    // model_2.addEventListener("loaded", () => {
    //   window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    // });

    // scene.appendChild(model_2);

    // let model_3 = document.createElement("a-entity");
    // model_3.setAttribute(
    //   "gps-entity-place",
    //   `latitude: ${latitude}; longitude: ${longitude};`
    // );
    // model_3.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");
    // model_3.setAttribute("rotation", "0 90 0");
    // model_3.setAttribute("animation-mixer", "");
    // model_3.setAttribute("scale", "0.5 0.5 1");

    // model_3.addEventListener("loaded", () => {
    //   window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    // });

    // scene.appendChild(model_3);

    // let model_4 = document.createElement("a-entity");
    // model_4.setAttribute(
    //   "gps-entity-place",
    //   `latitude: ${latitude}; longitude: ${longitude};`
    // );
    // model_4.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");
    // model_4.setAttribute("rotation", "0 270 0");
    // model_4.setAttribute("animation-mixer", "");
    // model_4.setAttribute("scale", "1 0.5 0.5");

    // model_4.addEventListener("loaded", () => {
    //   window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    // });

    // scene.appendChild(model_4);
  });
}

// Looking at the staticLoadPlaces function, you can see that places are statically loaded using an array. You can try to add more places, and you will see them while moving the camera if they are not too far from your position. If they are far but not too much, you will see them small, if they are closer to you, they will look bigger.
// For the purpose of this example, though, we are going to use just one place.
