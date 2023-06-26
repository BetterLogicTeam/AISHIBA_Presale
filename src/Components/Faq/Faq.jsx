import React from "react";
import "./Faq.css";
import faq from "../../assets/faq.png";
import faq_mob from "../../assets/faq_mob.png";
import { Accordion } from "react-bootstrap";

function Faq() {
  return (
    <div id="faq">
      <ico-faq _ngcontent-nxk-c18="" _nghost-nxk-c16="">
        <section _ngcontent-nxk-c16="" id="faq" className="faq">
          <div _ngcontent-nxk-c16="" className="container py-5 mt-4 mb-3">
            <div _ngcontent-nxk-c16="" className="row justify-content-center py-5">
              {/* <div
                _ngcontent-nxk-c16=""
                className="col-lg-6 order-1 order-lg-1"
              >
                <img
                  _ngcontent-nxk-c16=""
                  src={faq}
                  className="w-100 d-none d-md-block"
                />
                <img
                  _ngcontent-nxk-c16=""
                  src={faq_mob}
                  className="w-100 d-block d-md-none mb-5"
                />
              </div> */}
              <div
                _ngcontent-nxk-c16=""
                className="col-lg-6 order-1 order-lg-1"
              >
                <h2
                  _ngcontent-nxk-c16=""
                  className="faq_hede new_text_here   mb-3 fw-bold p-3"
                  style={{ fontFamily: "'Itim', cursive" }}
                >
                  Frequently Asked Questions
                </h2>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>What is AISHIBA? </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                    Aishiba is an advanced AI-powered platform designed to transform the way content is created and shared in the crypto community. With state-of-the-art AI algorithms and user-friendly features, Aishiba enables users to easily generate and customize engaging content. By enhancing social media engagement and facilitating community interactions, Aishiba aims to revolutionize the crypto landscape and provide a seamless platform for users to express their creativity and ideas.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="mt-3" eventKey="1">
                    <Accordion.Header> Where i can buy aishiba? </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                    Aishiba's presale will soon be live, offering the opportunity to purchase tokens using BNB, BUSD, USDT, or ETH. Stay tuned for updates on the presale launch.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item className="mt-3" eventKey="2">
                    <Accordion.Header>
                    When will I get my $AISHIBA tokens ?
                    </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                    Once the presale concludes, you will be able to claim your tokens. Stay informed for further instructions and token claiming details.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item className="mt-3" eventKey="3">
                    <Accordion.Header>
                    When can I start trading $AISHIBA ?
                    </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                    After the presale ends, our token will be listed on PancakeSwap and other cryptocurrency exchanges for trading. Stay tuned for updates on the listing and trading availability.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item className="mt-3" eventKey="4">
                    <Accordion.Header>
                    When will LP Staking and Token staking platform will launch?

                    </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                    Upon token distribution to all users, we will launch our staking platform, allowing you to provide liquidity and stake LP tokens. By doing so, you can earn additional tokens as rewards. Stay tuned for more information on the staking platform's launch and the exciting opportunities it will offer.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* <Accordion.Item className="mt-3" eventKey="5">
                    <Accordion.Header>
                      When will I be able to generate AI memes ?
                    </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                      The aishiba meme generation platform is earmarked to go
                      live in Q4 2023 and will operate based on users’ credit
                      balances earned via staking.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item className="mt-3" eventKey="6">
                    <Accordion.Header>
                      What are the benefits of staking $AI ?
                    </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                      Staking $AI tokens builds up credits for users. Credits
                      will allow access to the aishiba platform’s meme generation
                      features.
                    </Accordion.Body>
                  </Accordion.Item> */}



                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </ico-faq>
    </div>
  );
}

export default Faq;
