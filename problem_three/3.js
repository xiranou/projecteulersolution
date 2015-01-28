(function doMagic (number) {
  var primeFactors = getPrimeFactors(number);
  return console.log(primeFactors[primeFactors.length-1]);
})(600851475143);

function getPrimeFactors (number) {
  var factors = getFactors(number);
  var primeFactors = [];
  for (var i=0; i<factors.length; i++){
    if (isPrime(factors[i])) {
      primeFactors.push(factors[i]);
    }
  }
  return primeFactors;
}

function getFactors (number) {
  var factors = [];
  var square_root = Math.floor(Math.sqrt(number));
  for (var i=2; i<square_root; i++){
    if (number % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function isPrime (number) {
  for (var i=2; i<number; i++){
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}