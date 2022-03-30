import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import LinkHistory from '../../components/LinkHistory'
import './accountService.css'

const linkdata = [
  { page: 'ホーム', path: '/' },
  { page: 'アカウントサービス', path: '/account-service' }
]

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
    <div className='account_service'>
      <LinkHistory linkdata={linkdata} />
      <div className='button_wrapper'>
        <button
          type='button'
          onClick={() => pushLink('/account-service/edit-account')}
          className='edit'
        >
          <div className='content'>
            <p>アカウント情報変更</p>
            <ManageAccountsIcon
              sx={{
                fontSize: 120,
                color: 'dimgray'
              }}
            />
          </div>
        </button>
        <button
          type='button'
          onClick={() => pushLink('/account-service/order-history')}
          className='history'
        >
          <div className='content'>
            <p>注文履歴</p>
            <LibraryBooksIcon
              sx={{
                fontSize: 120,
                color: 'dimgray'
              }}
            />
          </div>
        </button>
      </div>
    </div>
  )
}

export default AccountService
