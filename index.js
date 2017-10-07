const search = (ele) => {
  if(event.keyCode === 13) {
    hillCoordinates = []
    buildCoordinates = []
    var inputValue = document.getElementById('input').value;
    stringSeparator(inputValue);
  }
}

const stringSeparator = (string) => {
  var comma = ',';
  var stringArr = string.split(comma);
  stringArr.map((string, i) => {
    hillCoordinates.push(parseInt(string));
  })
  extractSequence(hillCoordinates)
}

const extractSequence = (coordinates) => {
  coordinates.map((coordinate, i, array) => {
    while(coordinate === array[i+1]) {
      coordinates.splice(i, 1)
    }
  })
  findBuildLocations(coordinates)
}

const findBuildLocations = (coordinates) => {
  coordinates.map((coordinate, i, array) => {
    prevPerameter = array[i-1];
    currentPerameter = array[i];
    nextPerameter = array[i+1];
    if(currentPerameter > prevPerameter) {
      if(currentPerameter > nextPerameter) {
        buildCoordinates.push(currentPerameter)
      }
    } else if (currentPerameter < prevPerameter) {
      if(currentPerameter < nextPerameter) {
        buildCoordinates.push(currentPerameter)
      }
    }
  })
  displayValue();
}

const displayValue = () => {
  document.getElementById('points').innerHTML = buildCoordinates.join();
  document.getElementById('amount').innerHTML = buildCoordinates.length;
}

