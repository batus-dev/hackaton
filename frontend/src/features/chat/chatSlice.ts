import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
  createdAt: number
  emotion?: string | null
}

interface ChatState {
  messages: ChatMessage[]
  selectedEmotion: string | null
}

const initialState: ChatState = {
  messages: [],
  selectedEmotion: null,
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<ChatMessage>) {
      state.messages.push(action.payload)
    },
    setEmotion(state, action: PayloadAction<string | null>) {
      state.selectedEmotion = action.payload
    },
    clearChat(state) {
      state.messages = []
      state.selectedEmotion = null
    },
  },
})

export const { addMessage, setEmotion, clearChat } = chatSlice.actions
export default chatSlice.reducer
