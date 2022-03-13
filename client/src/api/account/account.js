import API from '../axios.config'

export const editAccount = form => {
  return API.put('/account-service/edit-account', {
    form
  })
}
