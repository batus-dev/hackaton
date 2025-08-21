import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat'
import MyList from './pages/MyList'
import InfoModal from './components/InfoModal'
import { useAppSelector } from './store/hooks'
import type { RootState } from './store/store'

export default function App() {
  const modalOpen = useAppSelector((s: RootState) => s.ui.modalContentId !== null)
  return (
    <div className="min-h-screen bg-bg text-text">
      <main>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mi-lista" element={<MyList />} />
        </Routes>
      </main>
      {modalOpen && <InfoModal />}
    </div>
  )
}
