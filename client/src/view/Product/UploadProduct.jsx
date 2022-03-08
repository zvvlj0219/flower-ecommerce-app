import { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { Divider } from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { Form, TextInput } from '../../components/TextInput'
import LinkHistory from '../../components/LinkHistory'
import { uploadProductToServer } from '../../redux/actions/productActions'
import { getBreakpoint } from '../../module/getBreakpoint'
import { getWindowSize } from '../../module/getWindowSize'
import './uploadproduct.css'

const linkdata = [
  { page: 'ホーム', path: '/' },
  { page: '出品', path: '/upload-product' }
]

const setting = {
  multiline: true
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 100,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const imageStyle = () => {
  const bp = getBreakpoint()

  switch (bp) {
    case 'xxs':
      return {
        width: '30px',
        height: '30px'
      }
    case 'xs':
      return {
        width: '50px',
        height: '50px'
      }
    case 'small':
    case 'medium':
      return {
        width: '120px',
        height: '120px'
      }
    case 'large':
    case 'xl':
      return {
        width: '200px',
        height: '200px'
      }
    default:
      return {
        width: '80px',
        height: '80px'
      }
  }
}

const UploadProduct = () => {
  const history = useHistory()

  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productStock, setProductStock] = useState('')
  const [imageData, setImageData] = useState([])
  const [fileList, setfileList] = useState({})
  const [previewSrc, setPreviewSrc] = useState([])

  const [modalState, setModalState] = useState(false)
  const [modalText, setModalText] = useState(
    '商品が出品されました。\r\nホーム画面に戻ります。'
  )

  const handleModalOpen = useCallback(() => {
    setModalState(true)
  })
  const handleModalClose = useCallback(() => {
    setModalState(false)
    history.push('/')
  })

  const uploadProduct = () => {
    const res = uploadProductToServer({
      name: productName,
      description: productDescription,
      price: productPrice,
      countInStock: productStock,
      imageUrl: imageData,
      fileList
    })

    console.log(res)

    if (res) {
      handleModalOpen()
    } else {
      setModalText('処理に失敗しました。\r\nもう一度やり直してください。')
      handleModalOpen()
    }
  }

  const { width: windowWidth } = getWindowSize()
  const [imageState, setImageState] = useState(imageStyle())

  const imageAreaStyle = imageStyle()

  useEffect(() => {
    setImageState(imageAreaStyle)
  }, [windowWidth])

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

  return (
    <div className='uploadproduct-container'>
      <Modal
        open={modalState}
        onClose={handleModalClose}
        aria-labelledby='modal-modal-title'
      >
        <Box sx={modalStyle} onClose={handleModalClose}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            { modalText }
          </Typography>
        </Box>
      </Modal>
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
        <div className='uplaoad_image'>
          <label htmlFor='upload-button'>
            <span>画像を選択する</span>
            <AddPhotoAlternateIcon color='primary' />
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
          <p className='image_counts'>
            {
              previewSrc.length < 4 && (
                `（あと${4 - (previewSrc.length)}枚まで）`
              )
            }
          </p>
        </div>
        <Divider />
        <div className='preview_image'>
          {
            previewSrc.length > 0 && (
              previewSrc.map(src => (
                <div key={`${src}_t_${Date.now()}`} style={imageState}>
                  <img
                    src={src}
                    alt=''
                    style={imageState}
                  />
                  <button
                    type='button'
                    onClick={() => removeImage(src)}
                    style={{
                      display: 'block',
                      marginLeft: '20px'
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))
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
    </div>
  )
}

export default UploadProduct
