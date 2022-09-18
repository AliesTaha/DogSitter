class Pet < ApplicationRecord
  belongs_to :user ,foreign_key:"user_id"
  validates :breed, presence: true, if: :has_name?
  has_one_attached :image, :dependent => :destroy

  def has_name?
    name.present?
  end
end
