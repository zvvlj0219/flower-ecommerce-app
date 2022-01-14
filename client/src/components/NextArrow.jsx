import PropTypes from 'prop-types'

const NextArrow = ({ className, onClick }) => {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
    >
      <span>
        &rang;
      </span>
    </button>
  )
}

NextArrow.defaultProps = {
  className: '',
  onClick: null
}

NextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default NextArrow
