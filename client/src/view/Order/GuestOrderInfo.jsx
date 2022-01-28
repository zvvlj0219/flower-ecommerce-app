import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { guestInfo } from '../../redux/actions/usersActions'
import './guestOrderInfo.css'

const Form = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: 250
  },
  [theme.breakpoints.up('sm')]: {
    width: 350
  },
  [theme.breakpoints.up('md')]: {
    width: 480
  },
  [theme.breakpoints.up('lg')]: {
    width: 600
  }
}))

const storage = localStorage.getItem('guestProfile') ?
  JSON.parse(localStorage.getItem('guestProfile'))
  : ''

const GuestOrderInfo = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { information } = storage
  const { client, address: clientAddress } = information
  console.log(storage)

  const [name, setName] = useState(client)
  const [address, setAddress] = useState(clientAddress)
  const [errmsg, setErrmsg] = useState(false)

  const nameHandler = useCallback(value => {
    setName(value)
  }, [setName])

  const addressHandler = useCallback(value => {
    setAddress(value)
  }, [setAddress])

  const linkToCasher = useCallback(() => {
    if (name !== '' && address !== '') {
      dispatch(guestInfo(name, address))
      history.push('/order')
    } else {
      setErrmsg(true)
    }
  })

  const setting = {
    fullWidth: true
  }

  return (
    <div className='guestOrderInfo'>
      <div className='form_container'>
        <h3>お届け先情報入力</h3>
        <p>
          {
            errmsg && '入力に誤りがあります'
          }
        </p>
        <div>
          <span>氏名:</span>
          <Form className='form_wrapper'>
            <TextField
              id='outlined-name'
              label='氏名'
              variant='outlined'
              value={name}
              fullWidth={setting.fullWidth}
              onChange={e => nameHandler(e.target.value)}
            />
          </Form>
        </div>
        <div>
          <span>住所:</span>
          <Form className='form_wrapper'>
            <TextField
              id='outlined-address'
              label='お届け先住所'
              variant='outlined'
              value={address}
              fullWidth={setting.fullWidth}
              onChange={e => addressHandler(e.target.value)}
            />
          </Form>
        </div>
      </div>
      <div className='link_to_casher'>
        <button
          type='button'
          onClick={() => linkToCasher()}
        >
          <span>購入画面に進む</span>
        </button>
      </div>
    </div>
  )
}

export default GuestOrderInfo
