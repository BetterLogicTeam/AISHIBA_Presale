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

  const milestones = [
    {
      title: 'Q1 2023',
      description: 'Presale & Token Development',
      description2: 'SolidProof Contract Audit',
      description3: 'Presale ICO Launch',
      description4: 'Platform Development Begins',
    },
    {
      title: 'Q2 2023',
      description: 'Staking Platform To Allow Users',
      description2: 'Platform Signup Launches',
      description3: 'Platform Development',
      description4: 'New CEX & DEX Listings',
    },
    {
      title: 'Q3 2023',
      description: 'AI Meme Generation Platform',
      description2: 'User Credits Based ',
      description3: 'Public Wall For Memes',
    },

    {
      title: 'Q1 2023',
      description: 'Presale & Token Development',
      description2: 'SolidProof Contract Audit',
      description3: 'Presale ICO Launch',
      description4: 'Platform Development Begins',
    },
    {
      title: 'Q2 2023',
      description: 'Staking Platform To Allow Users',
      description2: 'Platform Signup Launches',
      description3: 'Platform Development',
      description4: 'New CEX & DEX Listings',
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Platform />
      <Ai_token />
      <How_to_Buy />
      <Roadmap milestones={milestones}/>
      <Airdrop />
      <Faq />
      <Footer />
    </>
  )
}

export default App
