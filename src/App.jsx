import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import LogoSpace from './components/LogoSpace'
import DecorativeSquares from './components/DecorativeSquares'
import HomeTab from './components/HomeTab'
import CompetenceTab from './components/CompetenceTab'
import AboutTab from './components/AboutTab'
import ContactTab from './components/ContactTab'
import Footer from './components/Footer'

const TABS = {
  home: HomeTab,
  competence: CompetenceTab,
  about: AboutTab,
  contact: ContactTab,
}

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const ActiveTab = TABS[activeTab]

  return (
    <>
      <div className="web-top">
        <Header />
      </div>

      <Nav activeTab={activeTab} onTabChange={setActiveTab} />

      <div id="content">
        <LogoSpace />
        <DecorativeSquares />
        <ActiveTab onNavigate={setActiveTab} />
      </div>

      <Footer />
    </>
  )
}

export default App
