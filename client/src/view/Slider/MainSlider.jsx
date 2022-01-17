// react-slick package & css
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getWindowSize } from '../../module/getWindowSize'

// import images & css
import './main_slider.css'
import cherryblossom from '../../assets/cherryblossom.png'
import sofia from '../../assets/sofia.png'

// arrow components
import NextArrow from '../../components/NextArrow'
import PrevArrow from '../../components/PrevArrow'

const MainSlider = () => {
  const { windowSize } = getWindowSize()
  const { width } = windowSize

  // const [imageSize, setimageSize] = useState()

  const imagesWrapper = () => {
    if (width < 1100) {
      const imagesStyle = {
        width,
        height: width / 1.8
      }
      return imagesStyle
    }
    return {}
  }

  const options = {
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrow: true,
    dots: true,
    nextArrow: <NextArrow className='nextArrow' onClick={() => Slider.slickNext()} />,
    prevArrow: <PrevArrow className='prevArrow' onClick={() => Slider.slickPrev()} />
  }

  return (
    <div>
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
        <div>
          <div className='slide_image' style={imagesWrapper()}>
            <img src={cherryblossom} style={imagesWrapper()} alt='' />
            <div>
              <div>
                <h1>Meet your own special flower</h1>
                <Link to='/'><span>Shop now</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='slide_image' style={imagesWrapper()}>
            <img src={sofia} style={imagesWrapper()} alt='' />
            <div>
              <h1>Meet your own special flower</h1>
              <Link to='/'><span>Shop now</span></Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default MainSlider
