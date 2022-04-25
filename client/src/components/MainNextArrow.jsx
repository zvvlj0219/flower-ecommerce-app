import PropTypes from 'prop-types'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const MainNextArrow = ({ className, onClick }) => {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
      style={{
        display: 'block',
        right: '10px'
      }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: '35px', color: 'skyblue' }} />
    </button>
  )
}

MainNextArrow.defaultProps = {
  className: '',
  onClick: null
}

MainNextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default MainNextArrow
