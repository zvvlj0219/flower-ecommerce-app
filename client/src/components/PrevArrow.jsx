import PropTypes from 'prop-types'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const PrevArrow = ({ className, onClick }) => {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon fontSize='large' />
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
