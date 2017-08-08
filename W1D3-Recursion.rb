
def sum_to(n)

  return nil if n < 0
  return 0 if n == 0

  n + sum_to(n-1)

end


#########################################################################


def add_numbers(nums_array)

  return nil if nums_array.empty?

  nums_array.pop + add_numbers(nums_array)
end


#########################################################################


def gamma_fnc(n)

  return nil if n == 0
  return 1 if n == 1

  (n-1) * gamma_fnc(n-1)

end


#########################################################################


def ice_cream_shop(flavors, favorite)

  return false if flavors.empty?

  if flavors.pop == favorite
    return true
  else
    ice_cream_shop(flavors, favorite)
  end

end


#########################################################################


def reverse(string)

  return "" if string.length == 0

  string[-1] + reverse(string[0..-2])

end

p  reverse("house") # => "esuoh"
p  reverse("dog") # => "god"
p  reverse("atom") # => "mota"
p  reverse("q") # => "q"
p  reverse("id") # => "di"
p  reverse("") # => ""















