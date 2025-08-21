import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Content } from '@/types'

interface RecommendationsState {
  items: Content[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: RecommendationsState = {
  items: [],
  status: 'idle',
}

const slice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<RecommendationsState['status']>) {
      state.status = action.payload
    },
    setItems(state, action: PayloadAction<Content[]>) {
      state.items = action.payload
    },
    clear(state) {
      state.items = []
      state.status = 'idle'
    },
  },
})

export const { setStatus, setItems, clear } = slice.actions
export default slice.reducer
