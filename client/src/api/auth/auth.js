import API from '../axios.config'

export const signIn = form => {
  return API.post('/auth/signin', form)
}

export const register = form => {
  return API.post('/auth/register', form)
}
