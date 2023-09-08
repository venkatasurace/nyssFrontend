import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

import authConfig from 'src/configs/auth'

// ** Fetch Users
export const fetchData = createAsyncThunk('incomeReport/fetchData', async params => {
  const response = await axios.get(authConfig.incomeReportEndpoint, {
    params
  })

  return response
})

// ** Add User
// export const addUser = createAsyncThunk('appUsers/addUser', async (data, { getState, dispatch }) => {
//   const response = await axios.post('/apps/users/add-user', {
//     data
//   })
//   dispatch(fetchData(getState().user.params))

//   return response.data
// })

// ** Delete User
// export const deleteUser = createAsyncThunk('appUsers/deleteUser', async (id, { getState, dispatch }) => {
//   const response = await axios.delete('/apps/users/delete', {
//     data: id
//   })
//   dispatch(fetchData(getState().user.params))

//   return response.data
// })

export const appUsersSlice = createSlice({
  name: 'incomeReport',
  initialState: {
    incomeAllData: [],
    commitFilterData: [],
    publicFilterData: [],
    commitTotalAmount: 0,
    publicTotalAmount: 0,
    total: 1
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const updatedData = action.payload?.data?.data?.map((eachData, i) => ({
        id: i,
        slno: i + 1,
        ...eachData
      }))

      const commitTotalAmount = updatedData
        .filter((item, i) => item.category === 'Nember')
        .map(obj => obj.amount || 0) // Map each object to its "amount" property or 0 if it doesn't exist
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

      const publicTotalAmount = updatedData
        .filter((item, i) => item.category === 'public')
        .map(obj => obj.amount || 0) // Map each object to its "amount" property or 0 if it doesn't exist
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

      state.incomeAllData = updatedData
      state.commitFilterData = updatedData.filter((item, i) => item.category === 'Nember')
      state.publicFilterData = updatedData.filter((item, i) => item.category === 'public')
      state.commitTotalAmount = commitTotalAmount
      state.publicTotalAmount = publicTotalAmount
      state.total = action.payload.data.data.length
    })
  }
})

export default appUsersSlice.reducer
