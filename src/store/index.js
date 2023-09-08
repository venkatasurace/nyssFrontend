// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers

import calendar from 'src/store/apps/calendar'
import userData from 'src/store/apps/userData'
import incomeReport from 'src/store/apps/incomeReport'

export const store = configureStore({
  reducer: {
    calendar,
    userData,
    incomeReport
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
