import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Form, TextInput } from '../../components/TextInput'
import { register } from '../../redux/actions/usersActions'
import './auth.css'

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  // state
  const [email, setemail] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')

  // function
  const handleSubmit = () => {
    dispatch(register({
      email,
      username,
      password,
      confirmpassword
    }, history))
  }

  // form handler
  const handleEmail = useCallback(value => {
    setemail(value)
  }, [setemail])

  const handleUsername = useCallback(value => {
    setusername(value)
  }, [setusername])

  const handlePassword = useCallback(value => {
    setpassword(value)
  }, [setpassword])

  const handleConfirmPassword = useCallback(value => {
    setconfirmpassword(value)
  }, [setconfirmpassword])

  return (
    <div className='auth_container'>
      <h3>新規登録</h3>
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
      <div className='username wrapper'>
        <p>ニックネーム:</p>
        <Form>
          <TextInput
            id='username'
            label='ニックネーム'
            variant='outlined'
            value={username}
            type='text'
            onChange={e => handleUsername(e.target.value)}
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
      <div className='confirmpassword wrapper'>
        <p>パスワード(確認):</p>
        <Form>
          <TextInput
            id='confirmPassword'
            label='パスワード(確認)'
            variant='outlined'
            value={confirmpassword}
            type='password'
            onChange={e => handleConfirmPassword(e.target.value)}
          />
        </Form>
      </div>
      <div className='button_wrapper'>
        <button
          type='button'
          onClick={handleSubmit}
        >
          新規登録
        </button>
        <Link
          to='/auth/signin'
        >
          すでにアカウントをお持ちの方
        </Link>
      </div>
    </div>
  )
}

export default Register
