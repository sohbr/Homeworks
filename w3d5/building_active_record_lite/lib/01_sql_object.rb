require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    return @columns if @columns

    col = DBConnection.execute2(<<-SQL).first
        SELECT *
        FROM "#{self.table_name}"

      SQL

    col.map!(&:to_sym)
    @columns = col

  end

  def self.finalize!

    columns.each do |column|
      define_method(column) do
        self.attributes[column]
      end
    end

    columns.each do |column|
      define_method("#{column}=") do |value|
        self.attributes[column] = value
      end
    end


  end

  def self.table_name=(table_name)
    # ...
    @table_name = table_name
  end

  def self.table_name
    # ...
    @table_name || self.name.underscore.pluralize
  end

  def self.all
    # ...
    results = DBConnection.execute(<<-SQL)
      SELECT *
      FROM #{table_name}
    SQL

    parse_all(results)
  end

  def self.parse_all(results)
    # ...
    results.map {|result| self.new(result)}


  end

  def self.find(id)
    # ...
    results = DBConnection.execute(<<-SQL, id)
      SELECT *
      FROM #{table_name}
      WHERE id = ?
    SQL

    return nil unless results.length > 0

    parse_all(results).first

  end

  def initialize(params = {})
    # ...
    params.each do |attr_name, value|
      attr_name = attr_name.to_sym
      if self.class.columns.include?(attr_name)
        self.send("#{attr_name}=", value)
      else
        raise "unknown attribute '#{attr_name}'"
      end
    end
  end

  def attributes
    # ...
    @attributes ||= {}


  end

  def attribute_values
    # ...
    self.class.columns.map {|attr| self.send(attr) }
    # @attributes.values
  end

  def insert
    # ...
    col_names = self.class.columns.drop(1)
    columns = col_names.map(&:to_s).join(",")
    question_marks = (["?"] * col_names.length).join(", ")

    DBConnection.execute(<<-SQL, *attribute_values.drop(1))
      INSERT INTO #{self.class.table_name} (#{columns})
      VALUES (#{question_marks})
    SQL

    self.id = DBConnection.last_insert_row_id

  end

  def update
    # ...
    set_line = self.class.columns
      .map {|attr| "#{attr} = ?"}.join(", ")

    DBConnection.execute(<<-SQL, *attribute_values, id)
      UPDATE #{self.class.table_name}
      SET #{set_line}
      WHERE #{self.class.table_name}.id = ?
    SQL

  end

  def save
    # ...
    id.nil? ? insert : update
  end
end















