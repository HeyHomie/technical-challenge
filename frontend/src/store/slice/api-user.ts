import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../store'

export type UserState = {
  data: { user: any }
  pending: boolean
  error: boolean
}

const initialState: UserState = {
  data: { user: [{}] },
  pending: false,
  error: false
}

export const getInfoUser = createAsyncThunk(
  'user/userInfo',
  async (username: string): Promise<void> => {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    const data = await response.data
    console.log(data)
    return data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getInfoUser.pending, (state) => {
        state.pending = true
      })
      .addCase(getInfoUser.fulfilled, (state, { payload }) => {
        state.pending = false
        state.error = false
        state.data.user = payload
      })
      .addCase(getInfoUser.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  }
})

export const selectUser = (state: RootState): any => state.user

export const userReducer = userSlice.reducer
