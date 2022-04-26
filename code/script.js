window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
  // When the page loads, the function staticLoadPlaces is executed, and the return value places is passed to the function renderPlaces for rendering.
};

function staticLoadPlaces() {
  // a function staticLoadPlaces returns a list of latitude and longitude.
  return [
    {
      name: "Magnemite1",
      location: {
        // location
        lat: 40.49647, // latitude
        lng: 116.32018, // longitude
      },
    },
    // {
    //   name: "Magnemite2",
    //   location: {
    //     lat: 39.91092455,
    //     lng: 116.4133837,
    //   },
    // },
    // {
    //   name: "Magnemite3",
    //   location: {
    //     lat: 40.072820063960634,
    //     lng: 116.318075997769877,
    //   },
    // },
    // {
    //   name: "Magnemite4",
    //   location: {
    //     lat: 40.0728,
    //     lng: 116.318,
    //   },
    // },
  ];
}

function renderPlaces(places) {
  // a function to render the model
  let scene = document.querySelector("a-scene"); // get the element with the tag "a-scene"
  places.forEach((place) => {
    // traverse the entire places array
    let latitude = place.location.lat; // get latitude
    let longitude = place.location.lng; // get longitude

    let model = document.createElement("a-entity"); // create an "a-entity" element name "model"
    model.setAttribute(
      // assign latitude and longitude properties to "model" and declare that this is a "gps-entity-place"
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    model.setAttribute("gltf-model", "./assets/magnemite/scene.gltf"); // Set the "gltf-model" property
    model.setAttribute("rotation", "0 180 0"); // Set the "rotation" property
    model.setAttribute("animation-mixer", ""); // Set the "animation-mixer" property
    model.setAttribute("scale", "0.005 0.005 0.005"); // Set the "scale" property
    a;
    model.addEventListener("loaded", () => {
      // Add listener event to window dispatch event "gps-entity-place-loaded"
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    scene.appendChild(model); // Add the model to the scene
  });
}
