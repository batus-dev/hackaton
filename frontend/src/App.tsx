import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat'
import MyList from './pages/MyList'
import InfoModal from './components/InfoModal'
import { useAppSelector } from './store/hooks'
import type { RootState } from './store/store'

export default function App() {
  const modalOpen = useAppSelector((s: RootState) => s.ui.modalContentId !== null)
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b border-white/10 bg-black/40 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
          <Link to="/" className="font-semibold text-lg">Sorpréndeme</Link>
          <div className="flex items-center gap-3 text-sm">
            <NavLink to="/chat" className={({isActive}) => isActive ? 'text-white' : 'text-gray-400 hover:text-white'}>Chat</NavLink>
            <NavLink to="/mi-lista" className={({isActive}) => isActive ? 'text-white' : 'text-gray-400 hover:text-white'}>Mi Lista</NavLink>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mi-lista" element={<MyList />} />
        </Routes>
      </main>
      <footer className="border-t border-white/10 text-xs text-gray-400 py-6 text-center">© {new Date().getFullYear()} Sorpréndeme</footer>
      {modalOpen && <InfoModal />}
    </div>
  )
}
