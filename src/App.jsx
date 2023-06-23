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
import About_us from './Components/About_us/About_us'
import Tokenomics from './Components/Tokenomics/Tokenomics'
import Team from './Components/Team/Team'

function App() {
  const [count, setCount] = useState(2)

  const milestones = [
    {
      title: 'Q3 2023',
      description: 'Website Development',
      description2: ' Contract Audit',
      description3: 'Multichain Presale launch',
      description4: 'Dex Development preparation',
    },
    {
      title: 'Q4 2023',
      description: 'LP Staking Platform',
      description2: 'Dex platform',
      description3: 'NFT for holders',
      description4: 'CEX Listing',
    },
    {
      title: 'Q1 2024',
      description: 'AISHIBA PLATFORM',
      description2: 'Listing on major exchange ',
      description3: 'Influencer Marketing Push',
    },

    {
      title: 'Q2 2024',
      description: 'Launch of Merchandise',
      description2: 'Further Partnerships',
      description3: 'NFT and Games',
      description4: 'Further Ecosystem Development',
    },
    {
      title: 'Q3 2024',
      description: 'Officially launch the AISHIBA platform and drive widespread adoption.',
      description2: 'User Growth and Ecosystem Expansion',
      description3: 'Testing for Reliability and Security',
      // description4: 'New CEX & DEX Listings',
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <About_us/>
      <Tokenomics/>
      {/* <Platform /> */}
      {/* <Ai_token /> */}
      {/* <How_to_Buy /> */}
      <Roadmap milestones={milestones}/>
      <Team/>
        {/* <Airdrop /> */}
      <Faq />
      <Footer />
    </>
  )
}

export default App
