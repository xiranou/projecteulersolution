def do_magic(min, max)
  result = 0
  [*min..max].each do |a|
    [*min..max].each do |b|
      product = a * b
      result = product if padlindromic?(product) && product > result
    end
  end
  result
end

def padlindromic?(number)
  num_string = number.to_s
  num_string == num_string.reverse
end

p do_magic(100, 999)