class Stack


  def initialize
    @stack = []
  end

  def add(el)
    @stack.push(el)
  end

  def remove
    @stack.pop
  end

  def show
    @stack.dup
  end

end


############################################


class Queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.unshift(el)
  end

  def dequeue
    @queue.pop
  end

  def show
    @queue.dup
  end

end

############################################


class Map

  def initialize
    @map = []
  end

  def assign(key, value)

    key_match = @map.index { |pair| pair[0] == key}

    if key_match
      @map[key_match[0]][1] = value
    else
      @map << [key,value]
    end

  end

  def lookup(key)
    @map.each { |pair| return pair[1] if pair[0] == key}
  end

  def remove(key)
    @map.reject! { |pair| pair[0] == key}
  end


  def show
    deep_dup(@map)
  end

  def deep_dup(arr)
    arr.map do |el|
      el.is_a?(array) ? deep_dup(el) : el
    end
  end

end



















