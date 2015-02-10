def sum_of_squares(range)
  range.inject(0){|memo, number| memo += number**2}
end

def square_of_sums(range)
  range.inject(:+) ** 2
end

def do_magic(range)
  puts (square_of_sums(range) - sum_of_squares(range))
end

do_magic([*1..100])