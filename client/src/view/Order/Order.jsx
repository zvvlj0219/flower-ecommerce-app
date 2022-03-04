import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import DeleteIcon from '@mui/icons-material/Delete'
import Divider from '@mui/material/Divider'
import ImageArea from '../../components/ImageArea'
import { addIsCartIn, removeIsCartIn, deleteIsCartIn } from '../../redux/actions/detailActions'
import { orderConfirm } from '../../redux/actions/usersActions'
import { getSubtotal } from '../../module/getSubtotal'
import './order.css'

const Order = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { loading, cart, information } = useSelector(state => state.users)

  const orderConfirmFunc = useCallback(() => {
    dispatch(orderConfirm(history))
  })

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

  const subTotal = getSubtotal(cart)

  return (
    <div className='order'>
      <p className='link_wrapper'>
        <span>ホーム</span>
        <span>&rang;</span>
        <span>カート</span>
        <span>&rang;</span>
        <span>ユーザー情報確認</span>
      </p>
      <div className='user_info'>
        <h3>ユーザー情報確認</h3>
        <div>
          <span>受取人:</span>
          <p>{information.client}</p>
        </div>
        <div>
          <span>受取人住所:</span>
          <p>{information.address}</p>
        </div>
        <button type='button'>編集する</button>
      </div>
      <div className='item_container'>
        <h4 className='head'>カート内アイテム一覧</h4>
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
                    alt={item.name}
                    style={{
                      width: '150px'
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
      </div>
      <div className='price_container'>
        <p>代金手数料</p>
        <div>
          <div>商品代金</div>
          <div>{`${subTotal}円`}</div>
        </div>
        <div>
          <div>手数料</div>
          <div>{`${Math.floor(subTotal * 0.1)}円`}</div>
        </div>
        <div>
          <div>送料</div>
          <div>{`${Math.floor(subTotal * 0.3)}円`}</div>
        </div>
        <Divider />
        <div>
          <div>合計</div>
          <div>{`${subTotal + Math.floor(subTotal * 0.1) + Math.floor(subTotal * 0.3)}円`}</div>
        </div>
      </div>
      <div className='orderConfirm'>
        <button
          type='button'
          onClick={orderConfirmFunc}
        >
          注文確定
        </button>
      </div>
    </div>
  )
}

export default Order
