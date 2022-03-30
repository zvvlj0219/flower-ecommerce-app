import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, TextInput } from '../../components/TextInput'
import { editAccount } from '../../redux/actions/usersActions'
import LinkHistory from '../../components/LinkHistory'
import './editAccount.css'

const linkdata = [
  { page: 'ホーム', path: '/' },
  { page: 'アカウントサービス', path: '/account-service' },
  { page: 'アカウント情報編集', path: '/account-service/edit-account' }
]

const EditAccount = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const {
    email: emailState,
    information: infoState,
    username: usernameState,
    _id
  } = useSelector(state => state.users)

  const [_email, setEmail] = useState(emailState)
  const [_client, setClient] = useState(infoState.client)
  const [_address, setAddress] = useState(infoState.address)
  const [_username, setUsername] = useState(usernameState)

  const handleEmail = useCallback(value => {
    setEmail(value)
  })
  const handleClient = useCallback(value => {
    setClient(value)
  })
  const handleAddress = useCallback(value => {
    setAddress(value)
  })
  const handleUsername = useCallback(value => {
    setUsername(value)
  })

  const dispatchEditAccount = useCallback(() => {
    const form = {
      email: _email,
      client: _client,
      address: _address,
      username: _username,
      _id
    }

    dispatch(editAccount(form, history))
  })

  useEffect(() => {
    setEmail(emailState)
    setClient(infoState.client)
    setAddress(infoState.address)
    setUsername(usernameState)
  }, [emailState, infoState, usernameState])

  return (
    <div className='edit_account'>
      <LinkHistory linkdata={linkdata} />
      <h1>アカウント情報変更</h1>
      <div className='form_wrapper'>
        {
          emailState && infoState && usernameState ? (
            <>
              <p>Eメール</p>
              <Form>
                <TextInput
                  id='email'
                  label='Eメール'
                  variant='outlined'
                  value={_email}
                  type='text'
                  onChange={e => handleEmail(e.target.value)}
                />
              </Form>
              <p>氏名</p>
              <Form>
                <TextInput
                  id='client'
                  label='氏名'
                  variant='outlined'
                  value={_client}
                  type='text'
                  onChange={e => handleClient(e.target.value)}
                />
              </Form>
              <p>住所</p>
              <Form>
                <TextInput
                  id='address'
                  label='住所'
                  variant='outlined'
                  value={_address}
                  type='text'
                  onChange={e => handleAddress(e.target.value)}
                />
              </Form>
              <p>username</p>
              <Form>
                <TextInput
                  id='username'
                  label='ユーザーネーム'
                  variant='outlined'
                  value={_username}
                  type='text'
                  onChange={e => handleUsername(e.target.value)}
                />
              </Form>
            </>
          ) : ''
        }
      </div>
      <div className='button_wrapper'>
        <button
          type='button'
          onClick={dispatchEditAccount}
          className='save'
        >
          保存する
        </button>
        <button
          type='button'
          onClick={() => history.push('/account-service')}
          className='destroy'
        >
          変更を破棄する
        </button>
      </div>
    </div>
  )
}

export default EditAccount
