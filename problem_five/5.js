(function doMagic (max) {
  var number = max;
  while(true){
    if (divisible_by_range(number, max)) {
      console.log(number);
      return number;
    }
    number ++;
  }
})(20);

function divisible_by_range (number, max) {
  for (var i=1; i<max; i++){
    if (number % i !==0) {return false;}
  }
  return true;
}