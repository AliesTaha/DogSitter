class User < ApplicationRecord

  has_secure_password
  has_one :social
  has_many :pets
  has_one_attached :photo, :dependent => :destroy

  # validates :username, presence: true, uniqueness: { case_sensitive: true }
  validates :email, presence: true, uniqueness: { case_sensitive: true }

end
