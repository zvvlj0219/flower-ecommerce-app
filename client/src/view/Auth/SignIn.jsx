import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Form, TextInput } from '../../components/TextInput'
import { signIn } from '../../redux/actions/usersActions'
import './auth.css'

const SignIn = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  // state
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  // function
  const handleSubmit = () => {
    dispatch(signIn({
      email,
      password
    }, history))
  }

  // form handler
  const handleEmail = useCallback(value => {
    setemail(value)
  }, [setemail])

  const handlePassword = useCallback(value => {
    setpassword(value)
  }, [setpassword])

  return (
    <div className='auth_container'>
      <h3>ログイン</h3>
      <div className='email wrapper'>
        <p>Eメール:</p>
        <Form>
          <TextInput
            id='email'
            label='Eメール'
            variant='outlined'
            value={email}
            type='text'
            onChange={e => handleEmail(e.target.value)}
          />
        </Form>
      </div>
      <div className='password wrapper'>
        <p>パスワード:</p>
        <Form>
          <TextInput
            id='password'
            label='パスワード'
            variant='outlined'
            value={password}
            type='password'
            onChange={e => handlePassword(e.target.value)}
          />
        </Form>
      </div>
      <div className='button_wrapper'>
        <button
          type='button'
          onClick={handleSubmit}
        >
          ログイン
        </button>
        <Link
          to='/auth/register'
        >
          新規登録のかたはこちら
        </Link>
      </div>
    </div>
  )
}

export default SignIn
