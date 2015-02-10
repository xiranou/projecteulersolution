def do_magic(term)
  [].tap do |primes|
    store_primes(primes, term)
  end.last
end

def store_primes(primes_array, term)
  num = 2
  until primes_array.length >= term
    primes_array << num if is_prime?(num)
    num += 1
  end
end

def is_prime?(num)
  [*2...num].all? { |divisor| num % divisor != 0 }
end

puts do_magic(10001)