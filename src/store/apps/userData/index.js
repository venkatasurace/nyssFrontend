import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

import authConfig from 'src/configs/auth'

// ** Fetch Users
export const fetchData = createAsyncThunk('appUsers/fetchData', async params => {
  const response = await axios.get(authConfig.userData, {
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
  name: 'appUsers',
  initialState: {
    memberData: [],
    total: null
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const updatedData = action.payload?.data?.data?.map((eachData, i) => ({
        id: i,
        slno: i + 1,
        ...eachData
      }))
      state.memberData = updatedData
      state.total = action.payload.data.data.length
    })
  }
})

export default appUsersSlice.reducer
