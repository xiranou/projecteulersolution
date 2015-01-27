def do_magic(max)
  [*3...max].select do |number|
    divisible_by?(number, 3, 5)
  end.inject(:+)
end

def divisible_by?(number, *divisors)
  divisors.each do |divisor|
    return true if number % divisor == 0
  end
  return false
end

p do_magic(1000)