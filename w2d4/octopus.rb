#fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# O(n^2)
def sluggish_octopus(fishes)

  fishes.each_with_index do |fish1, i1|
    max_length = true

    fishes.each_with_index do |fish2, i2|
      next if i1 == i2
      max_length = false if fish2.length > fish1.length
    end

    return fish1 if max_length
  end

end

class Array

  def merge_sort(&prc)

    return self if length < 2

    prc ||= Proc.new{ |x, y| x <=> y }

    mid = length/2
    left = self.take(mid).merge_sort(&prc)
    right = self.drop(mid).merge_sort(&prc)

    Array.merge(left, right, &prc)

  end

  def self.merge(left, right, &prc)

    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
        when -1
          merged << left.shift
        when 0
          merged << left.shift
        when 1
          merged << right.shift
        end
    end

    merged.concat(left)
    merged.concat(right)

    merged
  end
end

# O(n logn)
def dominant_octopus(fishes)
  prc = Proc.new{ |x, y| x.length <=> y.length }

  fishes.merge_sort(&prc).last
end


# O(n)
def clever_octopus(fishes)

  longest_fish = fishes.first

  fishes.each do |fish|
    longest_fish = fish if fish.length > longest_fish.length
  end

  longest_fish
end


# tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]


def slow_dance(direction, array)
  array.each_with_index do |dir, idx|
    return idx if direction == dir
  end
end

def constnant_dance(direction, hash)
  hash[direction]
end






































