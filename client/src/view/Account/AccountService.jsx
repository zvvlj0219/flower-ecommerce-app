import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const AccountService = () => {
  const history = useHistory()
  const { isSignedIn } = useSelector(state => state.users)

  const pushLink = path => {
    if (!isSignedIn) {
      history.push('/auth/signin')
    } else {
      history.push(path)
    }
  }

  return (
    <div>
      <h1>account service</h1>
      <button type='button' onClick={() => pushLink('/account-service/edit-account')}>edit account</button>
      <button type='button' onClick={() => pushLink('/account-service/order-history')}>order history</button>
    </div>
  )
}

export default AccountService
