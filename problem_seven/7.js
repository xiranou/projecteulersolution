(function doMagic (term) {
  primes = storePrimes([], term);
  result = primes.pop();
  console.log(result);
  return result;
})(10001);

function storePrimes (primes, term) {
  var num = 2;
  while(primes.length <= term){
    if (isPrime(num)) {
      primes.push(num);
    }
    num ++;
  }
  return primes;
}

function isPrime (number) {
  for (var i=2; i<number; i++){
    if (number % number === 0) {
      return false;
    }
  }
  return true;
}