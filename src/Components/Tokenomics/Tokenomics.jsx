import React from 'react'
import "./Tokenomics.css"
import gr from "../../assets/gr1.png"

export default function Tokenomics() {
  return (
    <div className='tken_main_bg' id='tokenomics'>
    <h1 className='tkon_main_heainf  '>Aishiba Tokenomics</h1>

    <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-4">
                <div className="tokn_lrft_content text-white    ">
                <h6 className='progress_head'>TOTAL TOKENS</h6>
                <div className='single_pr'>
                <div className='d-flex justify-content-between'>
                    <h6 className='mb-0'>1,000,000,000</h6>
                    <p className='mb-0'>1 Billion</p>
                </div>
                <div className="tok_pr mt-1">
                <div className="inner_tkn"></div>

                </div>
                </div>
                <div className=' mt-4'>
                <h6 className='progress_head'>PUBLIC SALE</h6>

                <div className='d-flex justify-content-between'>
                    <h6 className='mb-0'>500,000,000</h6>
                    <p className='mb-0'>50%</p>
                </div>
                <div className="tok_pr mt-1">
                <div className="inner_tkn w-50"></div>

                </div>
                </div>
                <div className=' mt-4'>
                <h6 className='progress_head'>Aishiba POOL</h6>

                <div className='d-flex justify-content-between'>
                    <h6 className='mb-0'>100,000,000</h6>
                    <p className='mb-0'>10%</p>
                </div>
                <div className="tok_pr mt-1">
                <div className="inner_tkn ten"></div>

                </div>
                </div>
                <div className=' mt-4'>
                <h6 className='progress_head'>Aishiba VAULT</h6>

                <div className='d-flex justify-content-between'>
                    <h6 className='mb-0'>100,000,000</h6>
                    <p className='mb-0'>10%</p>
                </div>
                <div className="tok_pr mt-1">
                <div className="inner_tkn ten"></div>

                </div>
                </div>

                </div>
            </div>
            <div className="col-md-3">
                <img src={gr} className='w-100' alt="" />
            </div>
            <div className="col-md-4">
                <div className="tokn_lrft_content text-white    ">
                <h6 className='progress_head'>TOTAL TOKENS</h6>
               
               
                <div className=' mt-4'>
                <h6 className='progress_head'>Aishiba FARMS</h6>

                <div className='d-flex justify-content-between'>
                    <h6 className='mb-0'>100,000,000</h6>
                    <p className='mb-0'>10%</p>
                </div>
                <div className="tok_pr mt-1">
                <div className="inner_tkn ten"></div>

                </div>
                </div>
                <div className=' mt-4'>
                <h6 className='progress_head'>EXCHANGE LISTINGS</h6>

                <div className='d-flex justify-content-between'>
                    <h6 className='mb-0'>100,000,000</h6>
                    <p className='mb-0'>10%</p>
                </div>
                <div className="tok_pr mt-1">
                <div className="inner_tkn ten"></div>

                </div>
                </div>
                <div className=' mt-4'>
                <h6 className='progress_head'>LIQUIDITY</h6>

                <div className='d-flex justify-content-between'>
                    <h6 className='mb-0'>50,000,000</h6>
                    <p className='mb-0'>5%</p>
                </div>
                <div className="tok_pr mt-1">
                <div className="inner_tkn five"></div>

                </div>
                </div>
                <div className=' mt-4'>
                <h6 className='progress_head'>TEAM</h6>

                <div className='d-flex justify-content-between'>
                    <h6 className='mb-0'>50,000,000</h6>
                    <p className='mb-0'>5%</p>
                </div>
                <div className="tok_pr mt-1">
                <div className="inner_tkn five"></div>

                </div>
                </div>

                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}
