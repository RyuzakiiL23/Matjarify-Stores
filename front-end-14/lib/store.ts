import { configureStore } from '@reduxjs/toolkit'
import LogInDialogSlice from './features/LogInDialogSlice'
import AuthSlice from './features/AuthSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      logInDialog: LogInDialogSlice,
      AuthSlice,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']