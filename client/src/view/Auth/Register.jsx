import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { register } from '../../redux/actions/usersActions'

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
  const handleEmail = useCallback(e => {
    setemail(e.target.value)
  }, [setemail])

  const handleUsername = useCallback(e => {
    setusername(e.target.value)
  }, [setusername])

  const handlePassword = useCallback(e => {
    setpassword(e.target.value)
  }, [setpassword])

  const handleConfirmPassword = useCallback(e => {
    setconfirmpassword(e.target.value)
  }, [setconfirmpassword])

  return (
    <div>
      <p>Singin</p>
      <div>
        <div className='flex'>
          <p>Email:</p>
          <input
            type='email'
            name='email'
            placeholder='emial..'
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className='flex'>
          <p>Username:</p>
          <input
            type='text'
            name='username'
            placeholder='username..'
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className='flex'>
          <p>Password:</p>
          <input
            type='password'
            name='password'
            placeholder='password..'
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className='flex'>
          <p>confirmPassword:</p>
          <input
            type='password'
            name='password'
            placeholder='password..'
            value={confirmpassword}
            onChange={handleConfirmPassword}
          />
        </div>
        <button
          type='button'
          onClick={handleSubmit}
        >
          新規登録
        </button>
        <Link
          to='/auth/signin'
        >
          アカウントをお持ちの方
        </Link>
      </div>
    </div>
  )
}

export default Register
