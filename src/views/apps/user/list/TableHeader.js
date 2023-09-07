// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useRouter } from 'next/router'

const TableHeader = props => {
  // ** Props
  const { handleFilter, toggle, value, headerBtn, btnText } = props
  const router = useRouter()
  let { pathname } = router

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography
        sx={{ mr: 4, mb: 2, color: 'black', fontWeight: '500', fontSize: '1.2rem' }}
        color='secondary'
        variant='outlined'
      >
        {pathname === '/founders' ? 'Committee Members' : ''}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 6, mb: 2 }}
          placeholder='Search User'
          onChange={e => handleFilter(e.target.value)}
        />
        {headerBtn ? (
          <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
            {btnText}
          </Button>
        ) : null}
      </Box>
    </Box>
  )
}

export default TableHeader
