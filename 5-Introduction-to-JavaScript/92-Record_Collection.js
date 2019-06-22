// write a function that takes an album id, property, and value to modify the data

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== ""){
    if(collection[id][prop]){
      collection[id][prop].push(value);
    }
    else {
      collection[id][prop]=[value];
    }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }


  return collection;
}
// first, the function tests if the prop is equal to tracks and the value is not empty, then
//the function will locate the prop value from the specific collection and add a new value.

//then, if the first statement is false, the function will find the collections value of tracks

//then, if the first statement is false and the value is empty, the function will create a values

// finally, if each step does not execute, it will delete the collection from the database

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
