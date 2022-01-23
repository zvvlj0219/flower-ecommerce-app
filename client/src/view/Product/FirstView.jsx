import ProductsList from './ProductsList'
import MainSlider from '../Slider/MainSlider'

const FirstView = () => {
  return (
    <div>
      <div className='main_slider'>
        <MainSlider />
      </div>
      <div className='main_contents'>
        <ProductsList />
      </div>
      <div>ここに説明と写真</div>
    </div>
  )
}

export default FirstView
