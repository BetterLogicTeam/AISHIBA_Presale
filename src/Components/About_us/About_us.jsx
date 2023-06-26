import React from "react";
import "./About_us.css";
import good from "../../assets/good.png";
import ai from "../../assets/ai.png";

export default function About_us() {
  return (
    <div className="main_about_us" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={good} alt="" className="imgssrfwf" />
          </div>

          <div className="col-md-6" style={{ fontFamily: "'Itim', cursive" }}>
            <div className="about_us_contetn">
            <h1 className="main_about_al" style={{ fontFamily: "'Itim', cursive" }}>About AISHIBA</h1>
              {/* <h1 className='main_about_al'>About AISHIBAa</h1> */}

              <p>
               
                AISHIBA, a community-driven organization, is dedicated to offering a unified platform in the DeFi world, serving as a one-stop solution for all types of traders. Our goal is to empower users with a comprehensive solution that combines the advantages of a centralized exchange and extends beyond.
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ea sed praesentium corrupti sapiente, in fuga odit iusto doloremque molestiae id quam beatae sunt maiores aliquid aliquam quis blanditiis nostrum. */}
              </p>

              <div className="row">
                <div className="col-md-2 mt-3 d-none d-md-block">
                  {/* <img src={ai} alt="" /> */}
                </div>
                <div className="col-md-9">
                  <div className="lower_cotetn mt-4">
                    <h5>Explosive Growth Potential</h5>
                    <p>
                    With a focus on explosive growth potential, our objective is to connect isolated blockchains, creating a network for cross-chain asset exchange that provides essential underlying support for the flourishing DeFi ecosystem.
                    </p>
                  </div>
                  <div className="lower_cotetn">
                    <h5>Profitable Staking Incentives</h5>
                    <p>
                    In the realm of profitable staking incentives, AISHIBA leverages liquidity from various exchanges and possesses the capability to distribute a single trade transaction across multiple decentralized exchanges (DEXs), guaranteeing access to the most competitive prices.
                    </p>
                  </div>
                  <div className="lower_cotetn">
                    <h5>AISHIBA Marketplace</h5>
                    <p>
                    The AISHIBA Marketplace is governed by its community, who actively engage in forum discussions and have the opportunity to vote on proposals made by AISHIBA Holders, ensuring a collaborative decision-making process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
