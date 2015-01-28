require 'prime'

def do_magic(number)
  get_prime_factors(number).last
end

def get_prime_factors(number)
  square_root = Math.sqrt(number).ceil
  [].tap do |prime_factors|
    Prime.each(square_root) do |prime|
      prime_factors << prime if divisible?(number, prime)
    end
  end
end

def divisible?(number, divisor)
  number % divisor == 0
end

p do_magic(600851475143)