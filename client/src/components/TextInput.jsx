import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

export const Form = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: 250
  },
  [theme.breakpoints.up('sm')]: {
    width: 350
  },
  [theme.breakpoints.up('md')]: {
    width: 480
  },
  [theme.breakpoints.up('lg')]: {
    width: 600
  }
}))

export const TextInput = ({ id, label, variant, type, value, onChange }) => {
  const setting = {
    fullWidth: true
  }
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      value={value}
      type={type}
      fullWidth={setting.fullWidth}
      onChange={onChange}
    />
  )
}

TextInput.defaultProps = {
  id: '',
  label: '',
  variant: '',
  value: '',
  type: 'text',
  onChange: null
}

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
}
