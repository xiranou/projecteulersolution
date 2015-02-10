function padlindromic (number) {
  var numberString = number.toString();
  var sortedNumberString = sortString(numberString);
  return numberString === sortedNumberString;
}

function sortString (inputString) {
  return inputString.split("").reverse().join("");
}

(function doMagic (min, max) {
  var result = 0;
  for (var i=min; i<=max; i++){
    for (var j=min; j<=max; j++){
      var product = i * j;
      if (padlindromic(product) && product >= result) {
        result = product;
      }
    }
  }
  console.log(result);
  return result;
})(100,999);