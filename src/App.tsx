import { Routes, Route, Navigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SmoothScroll } from './components/motion/SmoothScroll'
import Home from './pages/Home'
import Program from './pages/Program'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import About from './pages/About'
import TrainingEnablement from './pages/TrainingEnablement'
import AIStarterProgram from './pages/AIStarterProgram'
import WebinarsMasterclasses from './pages/WebinarsMasterclasses'
import Community from './pages/Community'
import StyleGuide from './pages/StyleGuide'
import HomeLegacy from './pages/HomeLegacy'
import Huracan from './pages/Huracan'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col">
        <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-legacy" element={<HomeLegacy />} />
          <Route path="/bpo-ai-program" element={<Program />} />
          {/* Preserve old links/bookmarks to the former program slug */}
          <Route path="/program" element={<Navigate to="/bpo-ai-program" replace />} />
          <Route path="/training-and-enablement" element={<TrainingEnablement />} />
          {/* Retired "AI Agents & Automations" service line — redirect old links home */}
          <Route path="/ai-agent-menu" element={<Navigate to="/" replace />} />
          <Route path="/bespoke-agents-and-automations" element={<Navigate to="/" replace />} />
          <Route path="/software-replacements" element={<Navigate to="/" replace />} />
          <Route path="/private-llm-deployment" element={<Navigate to="/" replace />} />
          <Route path="/ai-starter-program" element={<AIStarterProgram />} />
          <Route path="/webinars-and-masterclasses" element={<WebinarsMasterclasses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="/huracan" element={<Huracan />} />
        </Routes>
      </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
