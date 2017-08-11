class LRUCache
  def initialize(max_size)

    @max_size = max_size
    @cache = Array.new

  end

  def count
    # returns number of elements currently in cache
    @cache.length

  end

  def add(el)
    # adds element to cache according to LRU principle

    if @cache.include?(el)
      @cache.delete(el)
      @cache.push(el)
    elsif count == @max_size
      @cache.shift
      @cache.push(el)
    else
      @cache.push(el)
    end

  end

  def show
    # shows the items in the cache, with the LRU item first
    p @cache

  end

  private
  # helper methods go here!




end