import ProductsList from './Product/ProductsList'
import MainSlider from './Slider/MainSlider'

const FirstView = () => {
  return (
    <div>
      <MainSlider />
      <div className='main_contents'>
        <ProductsList />
      </div>
      <div>ここに説明と写真</div>
    </div>
  )
}

export default FirstView
