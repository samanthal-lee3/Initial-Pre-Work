// we can chain properties together using dot or bracket notation to get at nested objects

// using notations you have to start at the most outer level of the object and move through each layer
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
