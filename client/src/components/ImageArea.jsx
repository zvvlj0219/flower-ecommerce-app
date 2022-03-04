import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const ImageArea = ({ path, style }) => {
  const [src, setSrc] = useState(null)

  useEffect(() => {
    import(`../assets/product/${path}`)
      .then(module => {
        setSrc(module.default)
      })
  }, [])

  return (
    <div className='preview_image'>
      <img
        src={src}
        alt=''
        style={style}
      />
    </div>
  )
}

ImageArea.defaultProps = {
  path: '',
  style: {}
}

ImageArea.propTypes = {
  path: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string)
}

export default ImageArea
