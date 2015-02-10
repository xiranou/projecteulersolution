(function doMagic (max) {
  var magic = square_of_sums(max) - sum_of_squares(max);
  console.log(magic);
  return magic;
})(100);

function square_of_sums (max) {
  var sum = 0;
  for (var i=1; i<=max; i++){
    sum += i;
  }
  return Math.pow(sum, 2);
}

function sum_of_squares (max) {
  var sum = 0;
  for (var i=1; i<=max; i++){
    var square = Math.pow(i, 2);
    sum += square;
  }
  return sum;
}