function generateFibos (term, fibos, i) {
  fibos = fibos || [1,2];
  i = i || 0;
  var new_fibo = fibos[i] + fibos[i+1];
  if (new_fibo >= term) {
    return fibos;
  }
  fibos.push(new_fibo);
  return generateFibos(term, fibos, i+1);
}

function getEvenFibos (term) {
  var fibos = generateFibos(term);
  var evenFibos = [];
  for (var i=0; i<fibos.length; i++){
    if (isEven(fibos[i])) {
      evenFibos.push(fibos[i]);
    }
  }
  return evenFibos;
}

function isEven (number) {
  return (number % 2 ===0);
}

(function doMagic (term) {
  var evenFibos = getEvenFibos(term);
  var result = evenFibos.reduce(function(i,j){
    return i + j;
  });
  return console.log(result);
})(4000000);