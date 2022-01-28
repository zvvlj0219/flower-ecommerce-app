import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

const TextInput = ({ id, label, variant, placeholder, onChange }) => {
  const [text, setText] = useState(placeholder)

  return (
    <TextField
      id={id}
      label={text}
      variant={variant}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={() => setText(label)}
      onBlur={() => setText(placeholder)}
    />
  )
}

TextInput.defaultProps = {
  id: '',
  label: '',
  variant: '',
  placeholder: '',
  onChange: null
}

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default TextInput
