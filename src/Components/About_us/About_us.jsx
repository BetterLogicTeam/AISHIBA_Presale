import React from 'react'
import "./About_us.css"
import good from "../../assets/good.png"
import ai from "../../assets/ai.png"

export default function About_us() {
  return (
    <div className='main_about_us' id='about'>

    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6 text-center">
    <img src={good} alt="" className='imgssrfwf' />

            </div>

            <div className="col-md-6">
            <div className="about_us_contetn">
                <h1 className='main_about_al'>About AISHIBA </h1>
                {/* <h1 className='main_about_al'>About AISHIBAa</h1> */}
      
      
      
                <p>
                AISHIBA is a community-driven organization that is established to provide a one stop solution for all kind of traders under one platform in the DeFi world.
We aim to empower our users with a comprehensive solution by providing them a platform that has benefits of a centralized exchange and beyond.
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ea sed praesentium corrupti sapiente, in fuga odit iusto doloremque molestiae id quam beatae sunt maiores aliquid aliquam quis blanditiis nostrum. */}
                </p>

<div className="row">
    <div className="col-md-2 mt-3 d-none d-md-block">

<img src={ai} alt="" />
    </div>
    <div className="col-md-9">

    <div className="lower_cotetn mt-4">
    <h5>Multi Chain Dex</h5>
    <p>Connecting all isolated blockchains and establish a cross-chain asset exchange network, providing all necessary underlying support for the Defi ecosystem.</p>
</div>
<div className="lower_cotetn">
    <h5>Never Ending Liquidity</h5>
    <p>
    AISHIBA obtains its liquidity from a variety of exchanges and has the capacity to distribute a single trade transaction across multiple DEXs in order to obtain the most competitive prices.
    </p>
</div>
<div className="lower_cotetn">
    <h5>Community Driven</h5>
    <p>
    Governed by its community, via forum discussions and, when pertinent, voting on proposals by the AISHIBA Holders.
    </p>
</div>
    </div>
</div>





            </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}
