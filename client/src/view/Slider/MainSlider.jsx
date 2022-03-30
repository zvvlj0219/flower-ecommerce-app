// react-slick package & css
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getWindowSize } from '../../module/getWindowSize'

// import images & css
import './main_slider.css'
import kh3 from '../../assets/kh3.jpg'
import venis from '../../assets/venis.jpg'

// arrow components
import MainNextArrow from '../../components/MainNextArrow'
import MainPrevArrow from '../../components/MainPrevArrow'

const imageBox = [
  { num: 1, image: kh3 },
  { num: 2, image: venis }
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
    nextArrow: <MainNextArrow className='nextArrow' onClick={() => Slider.slickNext()} />,
    prevArrow: <MainPrevArrow className='prevArrow' onClick={() => Slider.slickPrev()} />
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
                  <p>
                    Floristが贈る
                    <br />
                    フラワーギフト
                  </p>
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
