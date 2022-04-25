import { Divider } from '@mui/material'
import ProductsList from './Product/ProductsList'
import MainSlider from './Slider/MainSlider'
import fv1 from '../assets/fv/fv_1.jpg'
import fv2 from '../assets/fv/fv_2.jpg'
import fv3 from '../assets/fv/fv_3.jpg'
import fv4 from '../assets/fv/fv_4.jpg'
import fv5 from '../assets/fv/fv_5.jpg'
import fv6 from '../assets/fv/fv_6.jpg'

const images = [
  { id: 1, src: fv1 },
  { id: 2, src: fv2 },
  { id: 3, src: fv3 },
  { id: 4, src: fv4 },
  { id: 5, src: fv5 },
  { id: 6, src: fv6 }
]

const FirstView = () => {
  return (
    <div className='first_view'>
      <MainSlider />
      <div className='describe_1'>
        <p>
          母の日、お誕生日、長寿のお祝いなど個人間でお贈りするお祝いの花（御祝の花）やプレゼントの花にワンランク上のフラワーギフトはいかがですか。
          <br />
          ビジネスフラワーのフラワーギフトは厳選生産者のハウス内より直送する鮮度抜群の鉢花を始め、
          格安のフラワーギフトから、お祝い、贈り物などにアレンジメンントしたフラワーギフト、
          お誕生日、プレゼント用のかわいらしいフラワーギフトまで様々なお花を全国に配達しています。
        </p>
      </div>
      <h2>Product</h2>
      <p className='describe_2'>本日のおすすめ商品</p>
      <div className='main_contents'>
        <ProductsList />
      </div>
      <Divider
        sx={{
          width: '90%',
          margin: '0 auto'
        }}
      />
      <h2 id='garally'>Garally</h2>
      <p className='describe_2'>
        あなたが撮った思い出の一枚をFloristで共有できます。
      </p>
      <div className='site_images'>
        {
          images.map(el => (
            <img
              key={`images_id_${el.id}`}
              alt={el.id}
              src={el.src}
            />
          ))
        }
      </div>
    </div>
  )
}

export default FirstView
