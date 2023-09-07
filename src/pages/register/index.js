// ** React Imports
import { useState, Fragment, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

import { useRouter } from 'next/router'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Config
import authConfig from 'src/configs/auth'

// ** Axios
import axios from 'axios'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

import FormHelperText from '@mui/material/FormHelperText'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const RegisterV1 = () => {
  const envToken = process.env.NEXT_PUBLIC_JWT_TOKEN_REGISTER
  const router = useRouter()

  const [loginBtnLoader, setLoginBtnLoader] = useState(false)
  const [apiRespone, setApiResponse] = useState({ color: '', msg: null })

  // ** States
  const [values, setValues] = useState({
    firstName: '',
    emailId: '',
    number: '',
    password: '',
    registerToken: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  console.log(apiRespone)

  const handleSignUpBtn = e => {
    e.preventDefault()
    if (!values.firstName & !values.emailId & !values.number & !values.registerToken & !values.password) {
      alert('All fields are mandatorily')
    } else {
      if (envToken === values.registerToken) {
        setLoginBtnLoader(true)

        const payload = {
          firstName: values.firstName,
          number: values.number,
          email: values.emailId,
          role: 'guest',
          grade: 'null',
          password: values.password
        }
        axios
          .post(authConfig.RegisterEndpoint, payload)
          .then(res => {
            setApiResponse({ color: 'green', msg: 'Account create successfully' })
            setLoginBtnLoader(false)
          })
          .catch(err => {
            console.log('catch')
            console.log(err)
            setApiResponse({ color: '#F24325', msg: err.response.data.res })
            setLoginBtnLoader(false)
          })
      } else {
        alert('register Token Invalid')
      }
      setValues({
        firstName: '',
        emailId: '',
        number: '',
        password: '',
        registerToken: '',
        showPassword: false
      })
    }
  }

  return (
    <Box className='content-center login-container '>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ p: theme => `${theme.spacing(15.5, 7, 6.5)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ mb: 1.5, letterSpacing: '0.18px', fontWeight: 600 }}>
              Adventure starts here 🚀
            </Typography>
            <Typography variant='body2'>Make your app management easy and fun!</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSignUpBtn}>
            <TextField
              autoFocus
              fullWidth
              id='firstName'
              label='First Name'
              sx={{ mb: 4 }}
              onChange={handleChange('firstName')}
            />
            <TextField
              fullWidth
              id='emailId'
              type='email'
              label='Email'
              sx={{ mb: 4 }}
              onChange={handleChange('emailId')}
            />
            <TextField
              fullWidth
              id='number'
              sx={{ mb: 4 }}
              type='number'
              label='Number'
              onChange={handleChange('number')}
            />
            {values.number.length > 10 && (
              <p style={{ fontSize: '0.5rem', color: '#F24325', marginTop: '0px' }}> Please Enter Valid Number</p>
            )}

            <TextField
              fullWidth
              id='registerToken'
              placeholder='Register Token'
              label='Register Token'
              sx={{ mb: 4 }}
              onChange={handleChange('registerToken')}
            />
            <p></p>
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-register-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={values.password}
                id='auth-register-password'
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={e => e.preventDefault()}
                      aria-label='toggle password visibility'
                    >
                      <Icon icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} fontSize={20} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              sx={{ mb: 2, mt: 5 }}
              endIcon={loginBtnLoader ? <Icon icon='svg-spinners:bars-rotate-fade' /> : null}
            >
              Sign up
            </Button>

            {apiRespone.msg && (
              <p
                style={{ fontSize: '0.9rem', color: apiRespone.color, marginTop: '0px' }}
              >{`${apiRespone.msg} Click below Sign In`}</p>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography sx={{ mr: 2, color: 'text.secondary' }}>Already have an account?</Typography>
              <Typography
                component={Link}
                href='/pages/auth/login-v1'
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                Sign in
              </Typography>
            </Box>
            <Divider
              sx={{
                '& .MuiDivider-wrapper': { px: 4 },
                mt: theme => `${theme.spacing(5)} !important`,
                mb: theme => `${theme.spacing(7.5)} !important`
              }}
            >
              or
            </Divider>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                <Icon icon='mdi:facebook' />
              </IconButton>
              <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                <Icon icon='mdi:twitter' />
              </IconButton>
              <IconButton
                href='/'
                component={Link}
                onClick={e => e.preventDefault()}
                sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
              >
                <Icon icon='mdi:github' />
              </IconButton>
              <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                <Icon icon='mdi:google' />
              </IconButton>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}
RegisterV1.getLayout = page => <BlankLayout>{page}</BlankLayout>
RegisterV1.guestGuard = true

export default RegisterV1
