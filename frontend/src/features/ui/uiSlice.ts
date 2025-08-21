import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  modalContentId: string | null
}

const initialState: UIState = {
  modalContentId: null,
}

const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.modalContentId = action.payload
    },
    closeModal(state) {
      state.modalContentId = null
    },
  },
})

export const { openModal, closeModal } = slice.actions
export default slice.reducer
