import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

export const Form = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  [theme.breakpoints.up('md')]: {
    width: 600
  },
  [theme.breakpoints.up('lg')]: {
    width: 700
  }
}))

export const TextInput = ({ id, label, variant, type, value, multiline, onChange }) => {
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
      multiline={multiline}
      fullWidth={setting.fullWidth}
      onChange={onChange}
      autoComplete='off'
    />
  )
}

TextInput.defaultProps = {
  id: '',
  label: '',
  variant: '',
  value: '',
  type: 'text',
  multiline: false,
  onChange: null
}

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  onChange: PropTypes.func
}
