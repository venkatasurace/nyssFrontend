// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers

import calendar from 'src/store/apps/calendar'
import userData from 'src/store/apps/userData'
import incomeReport from 'src/store/apps/incomeReport'
import usageReport from 'src/store/apps/usageReport'

export const store = configureStore({
  reducer: {
    calendar,
    userData,
    incomeReport,
    usageReport
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
