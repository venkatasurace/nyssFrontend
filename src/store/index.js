// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers

import calendar from 'src/store/apps/calendar'
import userData from 'src/store/apps/userData'

export const store = configureStore({
  reducer: {
    calendar,
    userData
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
