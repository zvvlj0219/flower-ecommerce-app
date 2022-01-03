import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { signIn } from '../../redux/actions/usersActions'

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
  const handleEmail = useCallback(e => {
    setemail(e.target.value)
  }, [setemail])

  const handlePassword = useCallback(e => {
    setpassword(e.target.value)
  }, [setpassword])

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
          <p>Password:</p>
          <input
            type='password'
            name='password'
            placeholder='password..'
            value={password}
            onChange={handlePassword}
          />
        </div>
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
