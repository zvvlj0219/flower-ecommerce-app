// react-slick package & css
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getWindowSize } from '../../module/getWindowSize'

// import images & css
import './main_slider.css'
import ms4 from '../../assets/ms/ms_4.jpg'
import ms5 from '../../assets/ms/ms_5.jpg'
import ms6 from '../../assets/ms/ms_6.jpg'
import ms7 from '../../assets/ms/ms_7.jpg'

// arrow components
import MainNextArrow from '../../components/MainNextArrow'
import MainPrevArrow from '../../components/MainPrevArrow'

const imageBox = [
  { num: 1, image: ms4 },
  { num: 2, image: ms5 },
  { num: 3, image: ms6 },
  { num: 4, image: ms7 }
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
                <div className='head_text'>
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
