export const getSubtotal = cart => {
  let subtotal = 0
  cart.forEach(item => {
    subtotal += item.price * item.qty
  })
  return subtotal
}
