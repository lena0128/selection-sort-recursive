def selection_sort_recursive(arr)
  # BASE CASE
  return [] if arr.length === 0

  min = arr.min
  idx = arr.index(min)
  arr.delete_at(idx)
  result = selection_sort_recursive(arr)
  result.unshift(min)
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort_recursive([3, -1, 5, 2])

  puts

  puts "Expecting: [-3, 0, 3]"
  print "=> "
  print selection_sort_recursive([0, -3, 3])
end

# Please add your pseudocode to this file
# And a written explanation of your solution
