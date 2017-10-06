const search = (ele) => {
  if(event.keyCode === 13) {
    hills = []
    buildPoints = []
    var inputValue = document.getElementById('input').value;
    separator(inputValue);
  }
}

const separator = (string) => {
  var comma = ',';
  var stringArr = string.split(comma);
  stringArr.map((string, i) => {
    hills.push(string);
  })
  buildLocations(hills);
}

const buildLocations = (coordinates) => {
  coordinates.map((coordinate, i, array) => {
    var hillPerameters = array[i-1] && array[i+1]
    if(array[i] > hillPerameters || array[i] < hillPerameters) {
      buildPoints.push(coordinate);
    }
  })

  displayValue();
}

const displayValue = () => {
  document.getElementById('points').innerHTML = buildPoints.join();
  document.getElementById('amount').innerHTML = buildPoints.length;
}

