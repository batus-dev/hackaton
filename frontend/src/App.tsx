import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat'
import MyList from './pages/MyList'
import InfoModal from './components/InfoModal'
import { FlowStyleGuide } from './components/FlowStyleGuide'
import { useAppSelector } from './store/hooks'
import type { RootState } from './store/store'

export default function App() {
  const modalOpen = useAppSelector((s: RootState) => s.ui.modalContentId !== null)
  
  return (
    <div className="dark min-h-screen-dynamic bg-bg-base text-text-primary">
      {/* Flow-style gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-bg-base via-bg-surface to-bg-base -z-10" />
      
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mi-lista" element={<MyList />} />
          <Route path="/style-guide" element={<FlowStyleGuide />} />
        </Routes>
      </main>
      
      {modalOpen && <InfoModal />}
    </div>
  )
}
