window.onload = () => {
  render();
  // When the page loads, the function staticLoadPlaces is executed, and the return value places is passed to the function renderPlaces for rendering.
};

// An array of models to render
const models = [
  {
    url: "assets/magnemite/scene.gltf", // Model material address
    scale: "0.1 0.1 0.1", // Model scaling
    rotation: "180 0 0", // Model rotation angle
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.05 0.05 0.05",
    rotation: "0 90 0",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "0.1 0.1 0.1",
    rotation: "0 180 0",
  },
  {
    url: "assets/magnemite/scene.gltf",
    scale: "1 1 1",
    rotation: "0 270 0",
  },
];

// A Function that set model properties
const setModel = (model, entity) => {
  entity.setAttribute("gltf-model", model.url); // Set the model resource address
  entity.setAttribute("rotation", model.rotation); // Set the model rotation angle
  entity.setAttribute("scale", model.scale); // Set the model rotation scale
};

function render() {
  const scene = document.querySelector("a-scene"); // // get the element with the tag "a-scene"

  // Get the current latitude and longitude of the camera
  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude; // get latitude
    const longitude = position.coords.longitude; // get longitude

    const modelLength = 4; // number of models
    for (let modelIndex = 0; modelIndex < modelLength; modelIndex++) {
      // Traverse the model array to render the model
      const model = document.createElement("a-entity"); // Create an "a-entity" tag
      model.setAttribute(
        // Assign the latitude and longitude of the label
        "gps-entity-place", // set to "gps-entity-place"
        `latitude: ${latitude}; longitude: ${longitude};`
      );

      setModel(models[modelIndex], model); // Set other properties of the model

      model.setAttribute("animation-mixer", ""); // Set the model property "animation-mixer"

      scene.appendChild(model); // Add the model to "a-scene"
    }
  });
}

// This script uses objects in an object-oriented style. 
// First, through an array of model objects, the properties of the four models are declared, including URL, rotation angle, scale, and latitude and longitude position. 
// In the render() function, this object is traversed, an "a-enity" is generated in each loop, and then added to the "a-scene".
