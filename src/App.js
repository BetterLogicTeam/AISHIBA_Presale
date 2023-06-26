
import { Toaster } from 'react-hot-toast';
import './App.css';
import About_us from './Components/About_us/About_us';
import Buy_aishiba from './Components/Buy_aishiba/Buy_aishiba';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Roadmap from './Components/Roadmap/Roadmap';
import Team from './Components/Team/Team';
import Tokenomics from './Components/Tokenomics/Tokenomics';

function App() {

  const milestones = [
    {
      title: "Q3 2023",
      description: "Website Development",
      description2: " Contract Audit",
      description3: "Multichain Presale launch",
      description4: "Dex Development preparation",
    },
    {
      title: "Q4 2023",
      description: "LP Staking Platform",
      description2: "Dex platform",
      description3: "NFT for holders",
      description4: "CEX Listing",
    },
    {
      title: "Q1 2024",
      description: "AISHIBA PLATFORM",
      description2: "Listing on major exchange ",
      description3: "Influencer Marketing Push",
    },

    {
      title: "Q2 2024",
      description: "Launch of Merchandise",
      description2: "Further Partnerships",
      description3: "NFT and Games",
      description4: "Further Ecosystem Development",
    },
    {
      title: "Q3 2024",
      description:
        "Officially launch the AISHIBA platform and drive widespread adoption.",
      description2: "User Growth and Ecosystem Expansion",
      description3: "Testing for Reliability and Security",
      // description4: 'New CEX & DEX Listings',
    },
  ];

  let change=localStorage.getItem("switch_net")
  if(change==null){
    localStorage.setItem("switch_net","bsc")
  }

  return (
    <div className="App">
      <Toaster  />
      <Header />
      <Hero />
      <About_us />
      <Tokenomics />
      <Roadmap milestones={milestones} />
      <Buy_aishiba /><br></br><br></br>
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
