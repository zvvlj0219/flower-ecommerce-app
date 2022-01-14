import PropTypes from 'prop-types'

const PrevArrow = ({ className, onClick }) => {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
    >
      <span>
        &lang;
      </span>
    </button>
  )
}

PrevArrow.defaultProps = {
  className: '',
  onClick: null
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default PrevArrow
