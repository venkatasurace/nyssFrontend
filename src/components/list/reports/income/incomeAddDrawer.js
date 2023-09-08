// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { DevTool } from '@hookform/devtools'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { addUser } from 'src/store/apps/userData'

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  BookId: yup.number().typeError('BookId in number').required(),
  fullName: yup.string().required(),
  amount: yup.number().typeError('Amount in number').min(1).required(),
  paymentMode: yup.string().required(),
  category: yup.string().required(),
  paymentStatus: yup.string().required()
})

const defaultValues = {
  BookId: '',
  fullName: '',
  amount: '',
  paymentMode: '',
  category: '',
  paymentStatus: ''
}

const IncomeAddSidebarDrawer = props => {
  // ** Props
  const { open, toggle } = props

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.log('onsubmit')
    console.log(data)
    reset()
  }

  const handleClose = () => {
    toggle()
    reset()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h6'>Add Income</Typography>
        <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>
      <Box sx={{ p: 5 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='BookId'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Book Id'
                  onChange={onChange}
                  placeholder='Book Id'
                  error={Boolean(errors.BookId)}
                />
              )}
            />
            {errors.BookId && <FormHelperText sx={{ color: 'error.main' }}>{errors.BookId.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='fullName'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Full Name'
                  onChange={onChange}
                  placeholder='Full Name'
                  error={Boolean(errors.fullName)}
                />
              )}
            />
            {errors.fullName && <FormHelperText sx={{ color: 'error.main' }}>{errors.fullName.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='amount'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Amount'
                  onChange={onChange}
                  placeholder='Amount'
                  error={Boolean(errors.amount)}
                />
              )}
            />
            {errors.amount && <FormHelperText sx={{ color: 'error.main' }}>{errors.amount.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='paymentMode'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Payment Mode'
                  onChange={onChange}
                  placeholder='payment Mode'
                  error={Boolean(errors.paymentMode)}
                />
              )}
            />
            {errors.paymentMode && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.paymentMode.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='category'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Category'
                  onChange={onChange}
                  placeholder='member/public'
                  error={Boolean(errors.category)}
                />
              )}
            />
            {errors.category && <FormHelperText sx={{ color: 'error.main' }}>{errors.category.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='paymentStatus'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Payment Status'
                  onChange={onChange}
                  placeholder='paid/pending'
                  error={Boolean(errors.paymentStatus)}
                />
              )}
            />
            {errors.paymentStatus && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.paymentStatus.message}</FormHelperText>
            )}
          </FormControl>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }}>
              Submit
            </Button>
            <Button size='large' variant='outlined' color='secondary' onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
        <DevTool control={control} />
      </Box>
    </Drawer>
  )
}

export default IncomeAddSidebarDrawer
