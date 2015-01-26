def doMagic(max)
  i = 3
  results = []
  until i >= max
    if i % 3 == 0 || i % 5 == 0
      results << i
    end
    i += 1
  end
  p results.inject(:+)
end

doMagic(1000)