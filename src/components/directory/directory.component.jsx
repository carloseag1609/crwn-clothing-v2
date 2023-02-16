import PropTypes from 'prop-types'
import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {
        categories.map((category) => (
          <CategoryItem {...category} key={category.id} />
        ))
      }
    </div>
  )
}

Directory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })).isRequired
}

export default Directory
