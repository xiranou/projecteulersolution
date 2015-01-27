def generate_fibos(term, fibos=[1,2], i=0)
  new_fibo = fibos[i] + fibos[i+1]
  return fibos if new_fibo >= term
  fibos << new_fibo
  generate_fibos(term, fibos, i+1)
end

def get_even_fibos(term)
  generate_fibos(term).select { |fibo| fibo.even? }
end

def do_magic(term)
  get_even_fibos(term).inject(:+)
end

p do_magic(4000000)