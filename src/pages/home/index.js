import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { Divider, Grid } from '@mui/material'
import { fetchData as fetchDataIncome } from 'src/store/apps/incomeReport'
import { fetchData as fetchDataUsage } from 'src/store/apps/usageReport'

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const commiteeIncomeStore = useSelector(state => state.incomeReport)
  const usageAmountStore = useSelector(state => state.usageReport)

  useEffect(() => {
    dispatch(fetchDataIncome())
    dispatch(fetchDataUsage())
  }, [dispatch])

  return (
    <>
      <Card>
        <CardHeader title='2023 Dashboard' />
        <CardContent sx={{ pt: 4 }}>
          <Card>
            <CardMedia
              sx={{ height: 201 }}
              image='https://res-console.cloudinary.com/dyzhk4dka/thumbnails/v1/image/upload/v1696680121/MjAyMzA5MjZfMjMzNzEyX3NsdWN5Zw==/grid_landscape'
            />
            <CardContent sx={{ pt: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={9} sm={9} xl={10} lg={10} xxl={10}>
                  <Typography variant='h6' sx={{ mb: 2 }} item container xs={8}>
                    Committee Members Amount{' '}
                    <code
                      style={{ fontSize: '0.8rem', cursor: 'pointer' }}
                      onClick={() => router.push('/reports/income/')}
                    >
                      click here
                    </code>
                    to know more
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography variant='h6' sx={{ mb: 2 }} item container xs={2}>
                    {commiteeIncomeStore.commitTotalAmount}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={9} sm={9} xl={10} lg={10} xxl={10}>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    Area Amount{' '}
                    <code
                      style={{ fontSize: '0.8rem', cursor: 'pointer' }}
                      onClick={() => router.push('/reports/income/')}
                    >
                      click here
                    </code>
                    to know more
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    {commiteeIncomeStore.publicTotalAmount}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9} sm={9} xl={10} lg={10} xxl={10}>
                  <Typography variant='h6' sx={{ mb: 2 }} item xs={10}>
                    Additional Amount{' '}
                    <code
                      style={{ fontSize: '0.8rem', cursor: 'pointer' }}
                      onClick={() => router.push('/reports/income/')}
                    >
                      click here
                    </code>
                    to know more
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    {commiteeIncomeStore.additionalTotalAmount}
                  </Typography>
                </Grid>
              </Grid>

              <Divider />
              <Grid container spacing={2}>
                <Grid item xs={9} sm={9} xl={10} lg={10} xxl={10}>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    Total Amount{' '}
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    {commiteeIncomeStore.commitTotalAmount +
                      commiteeIncomeStore.publicTotalAmount +
                      commiteeIncomeStore.additionalTotalAmount}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={9} sm={9} xl={10} lg={10} xxl={10}>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    Usage Amount{' '}
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    {`-${usageAmountStore.totalAmount}`}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid container spacing={2}>
                <Grid item xs={9} sm={9} xl={10} lg={10} xxl={10}>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    2023 Saving Amount{' '}
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    {commiteeIncomeStore.commitTotalAmount +
                      commiteeIncomeStore.publicTotalAmount +
                      commiteeIncomeStore.additionalTotalAmount -
                      usageAmountStore.totalAmount}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  )
}

export default Index
