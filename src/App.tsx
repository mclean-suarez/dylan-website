import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Program from './pages/Program'
import AOWClients from './pages/AOWClients'
import Proof from './pages/Proof'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import About from './pages/About'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/aow" element={<AOWClients />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
