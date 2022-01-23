import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import DeleteIcon from '@mui/icons-material/Delete'
import Divider from '@mui/material/Divider'
import { addIsCartIn, removeIsCartIn, deleteIsCartIn } from '../../redux/actions/detailActions'
import './cart.css'

const Cart = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { loading, cart } = useSelector(state => state.users)

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

  const order = () => {
    history.push('/order')
  }

  return (
    <div className='cart'>
      <div className='link_wrapper'>
        <p>
          <Link
            to='/'
          >
            ホーム
          </Link>
          <span>&rang;</span>
          <Link
            to='/cart'
          >
            カート
          </Link>
        </p>
      </div>
      {
        !loading && cart.length > 0 && (
          <h4>{`カート内に${cart.length}点のアイテムがあります`}</h4>
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
                  <img
                    src={item.imagUrl}
                    alt={item.name}
                    className='image'
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
                      onClick={() => deleteFromCart(item._id)}
                    >
                      削除
                    </button>
                    <button
                      type='button'
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
      <div>
        {
          cart.length ?
            (
              <button
                type='button'
                onClick={order}
              >
                レジへ進む
              </button>
            ) : ''
        }
      </div>
    </div>
  )
}

export default Cart
