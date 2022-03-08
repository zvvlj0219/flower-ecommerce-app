import PropTypes from 'prop-types'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { forwardRef } from 'react'

const ProductPrevArrow = forwardRef((props, ref) => {
  const sx = {
    fontSize: 60
  }

  return (
    <div id='productSlider_prevArrow'>
      <button
        type='button'
        ref={ref}
        style={props.arrowStyle}
      >
        <ArrowBackIosNewIcon sx={sx} />
      </button>
    </div>
  )
})

ProductPrevArrow.defaultProps = {
  arrowStyle: {}
}

ProductPrevArrow.propTypes = {
  arrowStyle: PropTypes.objectOf(PropTypes.string)
}

export default ProductPrevArrow
