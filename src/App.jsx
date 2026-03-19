import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import IndexPage from './pages/IndexPage'
import DetailPage from './pages/DetailPage'

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 font-nunito">
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:slug" element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
