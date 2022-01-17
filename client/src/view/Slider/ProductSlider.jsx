// react-slick package & css
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import { Link } from 'react-router-dom'
// import { getWindowSize } from '../../module/getWindowSize'

// import images & css
import './productSlider.css'
import cherryblossom from '../../assets/cherryblossom.png'
import sofia from '../../assets/sofia.png'

// arrow components
import NextArrow from '../../components/NextArrow'
import PrevArrow from '../../components/PrevArrow'

const ProductSlider = () => {
  const options = {
    autoplay: true,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrow: true,
    dots: true,
    nextArrow: <NextArrow className='nextArrow' onClick={() => Slider.slickNext()} />,
    prevArrow: <PrevArrow className='prevArrow' onClick={() => Slider.slickPrev()} />
  }

  return (
    <div className='product_slider'>
      <Slider
        autoplay={options.autoplay}
        infinite={options.infinite}
        speed={options.speed}
        slidesToScroll={options.slidesToScroll}
        slidesToShow={options.slidesToShow}
        arrow={options.arrow}
        dots={options.dots}
        nextArrow={options.nextArrow}
        prevArrow={options.prevArrow}
      >
        <div className='slide_wrapper'>
          <img src={cherryblossom} alt='' className='slide_image' />
        </div>
        <div className='slide_wrapper'>
          <img src={sofia} alt='' className='slide_image' />
        </div>
      </Slider>
    </div>
  )
}

export default ProductSlider
