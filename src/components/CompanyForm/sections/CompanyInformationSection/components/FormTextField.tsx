import { TextField, TextFieldProps } from '@mui/material'

export function FormTextField(props: TextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      {...props}
    />
  )
}