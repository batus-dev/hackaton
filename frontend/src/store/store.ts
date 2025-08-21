import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '@/features/chat/chatSlice'
import recommendationsReducer from '@/features/recommendations/recommendationsSlice'
import watchlistReducer from '@/features/watchlist/watchlistSlice'
import uiReducer from '@/features/ui/uiSlice'

const WATCHLIST_KEY = 'sorprendeme.watchlist.v1'

function loadWatchlist() {
  try {
    const raw = localStorage.getItem(WATCHLIST_KEY)
    return raw ? JSON.parse(raw) : undefined
  } catch {
    return undefined
  }
}

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    recommendations: recommendationsReducer,
    watchlist: watchlistReducer,
    ui: uiReducer,
  },
  preloadedState: {
    watchlist: loadWatchlist(),
  } as any,
})

store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(state.watchlist))
  } catch {}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
