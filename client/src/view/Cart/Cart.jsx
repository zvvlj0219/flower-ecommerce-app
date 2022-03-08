import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import DeleteIcon from '@mui/icons-material/Delete'
import Divider from '@mui/material/Divider'
import LinkHistory from '../../components/LinkHistory'
import ImageArea from '../../components/ImageArea'
import { getBreakpoint } from '../../module/getBreakpoint'
import { getWindowSize } from '../../module/getWindowSize'
import { addIsCartIn, removeIsCartIn, deleteIsCartIn } from '../../redux/actions/usersActions'
import { getSubtotal } from '../../module/getSubtotal'
import './cart.css'

const linkdata = [
  { page: 'ホーム', path: '/' },
  { page: 'カート', path: '/cart' }
]

const imageStyle = () => {
  const bp = getBreakpoint()

  switch (bp) {
    case 'xs':
      return {
        width: '80px',
        height: '80px'
      }
    case 'small':
    case 'medium':
      return {
        width: '100px',
        height: '100px'
      }
    case 'large':
    case 'xl':
      return {
        width: '150px',
        height: '150px'
      }
    default:
      return {
        width: '100px',
        height: '100px'
      }
  }
}

const Cart = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { width: windowWidth } = getWindowSize()

  const { loading, cart, isSignedIn } = useSelector(state => state.users)

  const [imageState, setImageState] = useState(imageStyle())

  const addToCart = item => {
    dispatch(addIsCartIn(item))
  }

  const removeFromCart = item => {
    dispatch(removeIsCartIn(item))
  }

  const deleteFromCart = item => {
    dispatch(deleteIsCartIn(item))
  }

  const gotoDetail = useCallback(item => {
    history.push(`/product-detail/${item.name}/${item._id}`)
  })

  const order = useCallback(() => {
    if (isSignedIn) {
      history.push('/order')
    } else {
      history.push('/cart/guestorderinfo')
    }
  })

  const subTotal = getSubtotal(cart)

  const imageAreaStyle = imageStyle()

  useEffect(() => {
    setImageState(imageAreaStyle)
  }, [windowWidth])

  return (
    <div className='cart'>
      <LinkHistory linkdata={linkdata} />
      {
        !loading && cart.length > 0 && (
          <>
            <h4>{`カート内に${cart.length}点のアイテムがあります`}</h4>
            <p className='subtotal'>
              <span>
                小計&nbsp;
              </span>
              <span>
                {subTotal}
              </span>
              <span>
                円
              </span>
            </p>
          </>
        )
      }
      <div className='item_container'>
        {
          loading && ''
        }
        {
          !loading && cart.length > 0 &&
            cart.map(item => (
              <div key={item._id}>
                <div className='item'>
                  <ImageArea
                    path={item.imageUrl[0]}
                    style={{
                      ...imageState,
                      display: 'block',
                      margin: '10px'
                    }}
                  />
                  <div className='item_info' key={item._id}>
                    <Link
                      to={`/product-detail/${item.name}/${item._id}`}
                    >
                      {item.name}
                    </Link>
                    <p className='price_wrapper'>
                      <span>価格:</span>
                      <span className='price'>{item.price}</span>
                      <span>円（税込）</span>
                    </p>
                    <button
                      type='button'
                      className='delete'
                      onClick={() => deleteFromCart(item)}
                    >
                      削除
                    </button>
                    <button
                      type='button'
                      className='detail'
                      onClick={() => gotoDetail(item)}
                    >
                      詳細を見る
                    </button>
                  </div>
                  <div className='button_wrapper'>
                    <button
                      type='button'
                      onClick={() => removeFromCart(item)}
                    >
                      {
                        item.qty === 1 ?
                          <DeleteIcon /> : <ArrowBackIosNewIcon />
                      }
                    </button>
                    <p>{item.qty}</p>
                    <button
                      type='button'
                      onClick={() => addToCart(item)}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
                <Divider />
              </div>
            ))
        }
        {
          !loading && cart.length === 0 && (
            <p>カート内にアイテムがありません</p>
          )
        }
      </div>
      {
        cart.length > 0 && (
          <button
            type='button'
            onClick={order}
            className='link_to_regi'
          >
            <span>レジへ進む</span>
          </button>
        )
      }
    </div>
  )
}

export default Cart
