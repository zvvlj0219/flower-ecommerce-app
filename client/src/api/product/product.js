import API from '../axios.config'

// initial fetch three products
export const initialProducts = () => {
  return API.get('/')
}

// ajax fetch six products
export const ajaxProducts = _id => {
  return API.post('/ajax', {
    // _id : array
    _id
  })
}

export const fetchDetail = _id => {
  return API.post('/product-detail', {
    _id
  })
}

// all products
export const allProducts = () => {
  return API.get('/all-products')
}

export const uploadImageToServer = formData => {
  return API.post(
    '/upload-image',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
}

export const uploadProduct = productData => {
  return API.post('/upload-product', {
    productData
  })
}
