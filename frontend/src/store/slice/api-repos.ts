import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../store'

export interface ReposState {
  data: { repos: any }
  pending: boolean
  error: boolean
}

const initialState: ReposState = {
  data: { repos: [{}] },
  pending: false,
  error: false
}

export const getInfoRepos = createAsyncThunk(
  'repos/reposInfo',
  async (username: string): Promise<void> => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    )
    const data = await response.data
    return data
  }
)

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getInfoRepos.pending, (state) => {
        state.pending = true
      })
      .addCase(getInfoRepos.fulfilled, (state, { payload }) => {
        state.pending = false
        state.data.repos = payload
      })
      .addCase(getInfoRepos.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  }
})

export const selectRepos = (state: RootState): any => state.repos

export const reposReducer = reposSlice.reducer
