def generate_fibo(term, fibos=[1,2], i=0)
  new_fibo = fibos[i] + fibos[i+1]
  return fibos if new_fibo >= term
  fibos << new_fibo
  generate_fibo(term, fibos, i+1)
end

def do_magic(term)
  generate_fibo(term).select do |fibo|
    fibo.even?
  end.inject(:+)
end

p do_magic(4000000)