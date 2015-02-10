def do_magic(term)
  [].tap do |primes|
    num = 2
    until primes.length >= term
      primes << num if is_prime?(num)
      num += 1
    end
  end.last
end

def is_prime?(num)
  [*2...num].all? { |divisor| num % divisor != 0 }
end

puts do_magic(10001)