import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

import { Navigation, Pagination, A11y, Virtual, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import ProductNextArrow from '../../components/ProductNextArrow'
import ProductPrevArrow from '../../components/ProductPrevArrow'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import 'swiper/css/virtual'

import './productSlider.css'

const arrowStyle = {
  border: 'none',
  background: 'none'
}

const slideStyle = {
  width: '300px',
  height: '300px',
  display: 'block',
  margin: '0 auto'
}

const ProductSlider = ({ imageData }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='product_slider'>
      <Swiper
        className='swiper'
        modules={[
          Navigation,
          Pagination,
          A11y,
          Virtual,
          Autoplay
        ]}
        spaceBetween={50}
        slidesPerView={1}
        virtual
        autoplay
        onInit={swiper => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
      >
        {
          imageData.map(data => (
            <SwiperSlide key={data.id}>
              <img
                alt=''
                src={data.path}
                style={slideStyle}
              />
            </SwiperSlide>
          ))
        }
        <div className='dot_list'>
          {
            imageData.map(data => (
              <li
                key={data.id}
                className={activeIndex === data.id ? 'activeDot' : ''}
              >
                ●
              </li>
            ))
          }
        </div>
        <ProductNextArrow ref={nextRef} arrowStyle={arrowStyle} />
        <ProductPrevArrow ref={prevRef} arrowStyle={arrowStyle} />
      </Swiper>
    </div>
  )
}

ProductSlider.defaultProps = {
  imageData: []
}

ProductSlider.propTypes = {
  imageData: PropTypes.arrayOf(PropTypes.object)
}

export default ProductSlider
