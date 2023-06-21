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
                  className="header-text new_text_here   mb-3 fw-bold p-3"
                >
                  Frequently Asked Questions
                </h2>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header> What is aishiba ? </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                      aishiba is a next-level, AI-powered meme generation
                      platform designed to revolutionise the way crypto memes
                      are created and shared.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="mt-3" eventKey="1">
                    <Accordion.Header> Why aishiba ? </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                      {" "}
                      aishiba is addressing a growing problem on Crypto Twitter
                      and other social media - the regurgitation of the same
                      stale memes. We’re injecting life into meme creation
                      through the power of $AI tokens.{" "}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item className="mt-3" eventKey="2">
                    <Accordion.Header>
                      {" "}
                      What is the $AI token utility ?{" "}
                    </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                      The $AI token is the key to accessing our bespoke AI
                      generation tools. $AI token holders will receive special
                      benefits such as exclusive access to advanced meme
                      generation software, airdrops, and more.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item className="mt-3" eventKey="3">
                    <Accordion.Header>
                      {" "}
                      When will I get my $AI tokens ?{" "}
                    </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                      If you’ve purchased $AI tokens in presale, you’ll be able
                      to claim them on June 19th at 9am UTC.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item className="mt-3" eventKey="4">
                    <Accordion.Header>
                      When can I start trading $AI ?
                    </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                      We’ll list the $AI token on a top DEX as soon as possible
                      after the presale ends in Q3. Our aim is also to secure
                      top CEX listings.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item className="mt-3" eventKey="5">
                    <Accordion.Header>
                      When will I be able to generate AI memes ?
                    </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                      The aishiba meme generation platform is earmarked to go
                      live in Q4 2023 and will operate based on users’ credit
                      balances earned via staking.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item className="mt-3" eventKey="5">
                    <Accordion.Header>
                      What are the benefits of staking $AI ?
                    </Accordion.Header>
                    <Accordion.Body className="accor_heading">
                      Staking $AI tokens builds up credits for users. Credits
                      will allow access to the aishiba platform’s meme generation
                      features.
                    </Accordion.Body>
                  </Accordion.Item>
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
