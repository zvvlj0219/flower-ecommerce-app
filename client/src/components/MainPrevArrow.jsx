import PropTypes from 'prop-types'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const MainPrevArrow = ({ className, onClick }) => {
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

MainPrevArrow.defaultProps = {
  className: '',
  onClick: null
}

MainPrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default MainPrevArrow
