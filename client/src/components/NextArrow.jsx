import PropTypes from 'prop-types'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const NextArrow = ({ className, onClick }) => {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
    >
      <ArrowForwardIosIcon fontSize='large' />
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
