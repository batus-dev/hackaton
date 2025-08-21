import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Content } from '@/types'

export interface WatchlistState {
  ids: string[]
  entities: Record<string, Content>
}

const initialState: WatchlistState = {
  ids: [],
  entities: {},
}

const slice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Content>) {
      const c = action.payload
      if (!state.entities[c.id]) {
        state.entities[c.id] = c
        state.ids.push(c.id)
      }
    },
    remove(state, action: PayloadAction<string>) {
      const id = action.payload
      if (state.entities[id]) {
        delete state.entities[id]
        state.ids = state.ids.filter((x) => x !== id)
      }
    },
    toggle(state, action: PayloadAction<Content>) {
      const c = action.payload
      if (state.entities[c.id]) {
        delete state.entities[c.id]
        state.ids = state.ids.filter((x) => x !== c.id)
      } else {
        state.entities[c.id] = c
        state.ids.push(c.id)
      }
    },
  },
})

export const { add, remove, toggle } = slice.actions
export default slice.reducer
