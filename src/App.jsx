import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Conference from './pages/Conference'
import Connect from './pages/Connect'
import Give from './pages/Give'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/give" element={<Give />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
