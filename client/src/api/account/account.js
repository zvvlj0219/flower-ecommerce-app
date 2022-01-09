import API from '../axios.config'

export const updateInfo = data => {
  return API.put('/account/updateInfo', data)
}
