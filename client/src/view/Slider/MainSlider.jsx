// react-slick package & css
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getWindowSize } from '../../module/getWindowSize'

// import images & css
import './main_slider.css'
import portrait1 from '../../assets/main_slider/portrait1.jpg'
import portrait2 from '../../assets/main_slider/portrait2.jpg'
import portrait3 from '../../assets/main_slider/portrait3.jpg'
import flowerbox1 from '../../assets/main_slider/flowerbox1.jpg'
import wedding1 from '../../assets/main_slider/wedding1.jpg'

// arrow components
import NextArrow from '../../components/NextArrow'
import PrevArrow from '../../components/PrevArrow'

const imageBox = [
  { num: 1, image: portrait1 },
  { num: 2, image: portrait2 },
  { num: 3, image: portrait3 },
  { num: 4, image: flowerbox1 },
  { num: 5, image: wedding1 }
]

const MainSlider = () => {
  const { width } = getWindowSize()

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
    <div className='main_slider'>
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
        {
          imageBox.map(slide => (
            <div key={slide.num}>
              <div className='slide_image' style={imagesWrapper()}>
                <img src={slide.image} style={imagesWrapper()} alt='' />
                <div>
                  <div>
                    <h1>Meet your own special flower</h1>
                    <Link to='/'><span>Shop now</span></Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default MainSlider
