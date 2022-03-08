import PropTypes from 'prop-types'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { forwardRef } from 'react'

const ProductNextArrow = forwardRef((props, ref) => {
  const sx = {
    fontSize: 60
  }

  return (
    <div id='productSlider_nextArrow'>
      <button
        type='button'
        ref={ref}
        style={props.arrowStyle}
      >
        <ArrowForwardIosIcon sx={sx} />
      </button>
    </div>
  )
})

ProductNextArrow.defaultProps = {
  arrowStyle: {}
}

ProductNextArrow.propTypes = {
  arrowStyle: PropTypes.objectOf(PropTypes.string)
}

export default ProductNextArrow
