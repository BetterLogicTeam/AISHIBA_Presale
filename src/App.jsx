import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Platform from './Components/Platform/Platform'
import Ai_token from './Components/Ai_token/Ai_token'
import How_to_Buy from './Components/How_to_Buy/How_to_Buy'
import Roadmap from './Components/Roadmap/Roadmap'
import Airdrop from './Components/Airdrop/Airdrop'
import Faq from './Components/Faq/Faq'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Platform />
      <Ai_token />
      <How_to_Buy />
      <Roadmap />
      <Airdrop />
      <Faq />
      <Footer />
    </>
  )
}

export default App
