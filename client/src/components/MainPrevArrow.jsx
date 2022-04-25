import PropTypes from 'prop-types'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const MainPrevArrow = ({ className, onClick }) => {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
      style={{
        display: 'block',
        left: '10px'
      }}
    >
      <ArrowBackIosNewIcon sx={{ fontSize: '35px', color: 'skyblue' }} />
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
