import { useState, useCallback } from 'react'
import { Form, TextInput } from '../../components/TextInput'
import LinkHistory from '../../components/LinkHistory'
import { uploadProductToServer } from '../../redux/actions/productActions'
import './uploadproduct.css'

const linkdata = [
  { page: 'ホーム', path: '/' },
  { page: '出品', path: '/upload-product' }
]

const setting = {
  multiline: true
}

const UploadProduct = () => {
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productStock, setProductStock] = useState('')
  const [imageData, setImageData] = useState([])
  const [fileList, setfileList] = useState({})
  const [previewSrc, setPreviewSrc] = useState([])

  const uploadProduct = () => {
    uploadProductToServer({
      name: productName,
      description: productDescription,
      price: productPrice,
      countInStock: productStock,
      imageUrl: imageData,
      fileList
    })
  }

  const handleProductName = useCallback(value => {
    setProductName(value)
  }, [setProductName])

  const handleProductDescription = useCallback(value => {
    setProductDescription(value)
  }, [setProductDescription])

  const handleProductPrice = useCallback(value => {
    setProductPrice(value)
  }, [setProductPrice])

  const handleProductStock = useCallback(value => {
    setProductStock(value)
  }, [setProductStock])

  const previewer = useCallback(file => {
    if (!file) return

    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = event => {
      setPreviewSrc(src => {
        return [
          ...src,
          event.target.result
        ]
      })
    }
  }, [previewSrc])

  const handleImageFile = useCallback(e => {
    if (!e.target.files) return
    setfileList([...e.target.files])

    for (let i = 0; i < e.target.files.length; i += 1) {
      previewer(e.target.files[i])

      setImageData(data => {
        return [
          ...data,
          e.target.files[i].name
        ]
      })
    }
  }, [fileList, setfileList, setImageData])

  const removeImage = useCallback(src => {
    const refreshedState = previewSrc.filter(el => {
      return el !== src
    })
    setPreviewSrc(refreshedState)
  }, [previewSrc])

  // `${process.env.PUBLIC_URL}/image/sofia.png`

  return (
    <div className='uploadproduct-container'>
      <LinkHistory linkdata={linkdata} />
      <div className='form_container'>
        <div className='name_wrapper'>
          <p>商品名:</p>
          <Form>
            <TextInput
              id='product-name'
              label='商品名'
              variant='outlined'
              value={productName}
              type='text'
              onChange={e => handleProductName(e.target.value)}
            />
          </Form>
        </div>
        <div className='description_wrapper'>
          <p>商品説明:</p>
          <Form>
            <TextInput
              id='description'
              label='商品説明'
              variant='outlined'
              type='text'
              value={productDescription}
              multiline={setting.multiline}
              onChange={e => handleProductDescription(e.target.value)}
            />
          </Form>
        </div>
        <div className='price_wrapper'>
          <p>価格:</p>
          <Form>
            <TextInput
              id='product-price'
              label='価格'
              variant='outlined'
              value={productPrice}
              type='text'
              onChange={e => handleProductPrice(e.target.value)}
            />
          </Form>
        </div>
        <div className='stock_wrapper'>
          <p>在庫:</p>
          <Form>
            <TextInput
              id='product-stock'
              label='在庫'
              variant='outlined'
              value={productStock}
              type='text'
              onChange={e => handleProductStock(e.target.value)}
            />
          </Form>
        </div>
      </div>
      <hr />
      <label htmlFor='upload-button'>
        画像を選択する
        <input
          type='file'
          id='upload-button'
          name='upload-input-name'
          multiple
          onChange={e => handleImageFile(e)}
          style={{
            display: 'none'
          }}
        />
      </label>
      <hr />
      <div className='preview_image'>
        {
          previewSrc.length > 0 && (
            <div>
              <p>preview</p>
              {
                previewSrc.map(src => (
                  <div key={src}>
                    <img
                      src={src}
                      alt=''
                      style={{
                        width: '300px',
                        height: '300px'
                      }}
                    />
                    <button
                      type='button'
                      onClick={() => removeImage(src)}
                      style={{
                        display: 'block',
                        marginLeft: '20px'
                      }}
                    >
                      delete
                    </button>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
      <div className='button_wrapper'>
        <button
          type='button'
          onClick={() => uploadProduct()}
        >
          商品を登録する
        </button>
      </div>
    </div>
  )
}

export default UploadProduct
