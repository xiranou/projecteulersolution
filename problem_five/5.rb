def do_magic(range)
  number = range.last
  loop do |_|
    return puts(number) if divisible_by_range?(number, range)
    number += 1
  end
end

def divisible_by_range?(number,range)
  range.all? { |divisor| number % divisor == 0 }
end

do_magic([*1..20])