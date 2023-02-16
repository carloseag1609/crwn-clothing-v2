import PropTypes from 'prop-types'
import './category-item.styles.scss'

const CategoryItem = ({ title, imageUrl }) => (
  <div className="category-container">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
)

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default CategoryItem
