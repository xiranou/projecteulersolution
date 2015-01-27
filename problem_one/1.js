function divisibleBy (number, divisors) {
  for (var i=0; i<divisors.length; i++){
    if (number % divisors[i] === 0) {
      return true;
    }
  }
  return false;
}

(function doMagic (max) {
  var results =[];
  for (var i=3; i<=max; i++){
    if (divisibleBy(i, [3,5])) {
      results.push(i);
    }
  }
  var sum = results.reduce(function(a,b){
    return a + b;
  });
  return console.log(sum);
})(1000);