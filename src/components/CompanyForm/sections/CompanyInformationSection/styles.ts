import { Box, styled } from '@mui/material'

export const GlassFormField = styled(Box)(({ theme }) => ({
  background: 'rgba(229, 224, 220, 0.4)',
  backdropFilter: 'blur(10px)',
  borderRadius: '8px',
  border: '1px solid rgba(93, 155, 155, 0.5)',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',

  '& .MuiFormControl-root': {
    width: '100%',
  },

  '& .MuiInputBase-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },

  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#33B0B0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5D9B9B',
      boxShadow: '0 0 5px #00FFFF',
    },
  },

  '& .MuiInputLabel-root': {
    color: '#333333',
    fontFamily: 'Roboto, Arial',
    '&.Mui-focused': {
      color: '#5D9B9B',
    },
  },

  '&:hover': {
    boxShadow: '0 0 10px rgba(51, 176, 176, 0.2)',
  },
}))