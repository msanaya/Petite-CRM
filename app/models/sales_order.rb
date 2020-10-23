class SalesOrder < ApplicationRecord
  has_one :salesperson
  has_one :customer
  has_and_belongs_to_many :product

validates :salesperson_id,
  # :presence => true,
  :allow_blank => true, 
  :uniqueness => true

validates :customer_id,
  # :presence => true,
  :allow_blank => true, 
  :uniqueness => true

validates :product_id,
  # :presence => true,
  :allow_blank => true, 
  :uniqueness => true

validates :status,
  :presence => true
end


  # SalesOrder.find_or_create_by(name: 'variable with user input') https://apidock.com/rails/v4.0.2/ActiveRecord/Relation/find_or_create_by

