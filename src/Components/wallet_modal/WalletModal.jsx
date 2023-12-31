import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useDispatch } from "react-redux";
// import { connectWalletAction } from "../../store/actions/login";
import metamask from '../../assets/metamask.svg'
import wallet_connect from '../../assets/wallet_connect.svg'
import './Wallet_Style.css'  
import { getUserProfile } from "../../features/userSlice";
function WalletModal(props) {
  const dispatch = useDispatch();
  // console.log("props",props.ID);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="headermodealdiv text-center" >
        <div _ngcontent-vsv-c60="" class="fs-3 bold-text mb-4 text-uppercase text-center headerdiv  fw-bold">Select Wallet Provider</div>
        
      </Modal.Header>
      <Modal.Body>
        <div
          _ngcontent-vsv-c60=""
          class="d-flex justify-content-around gap-3 text-center ng-star-inserted mt-3 mb-3 p-3 "
        >
          <div
            _ngcontent-vsv-c60=""
            role="button"
            class="cursor-pointer walletBtn ng-star-inserted"
            onClick={()=>(dispatch(getUserProfile({id:2,chain:props.ID})),props.onHide())}
          >
            <img
              _ngcontent-vsv-c60=""
              src={metamask}
              alt="metamask"
              class="walletIcon mb-3"
            />
            <span
              _ngcontent-vsv-c60=""
              class="d-block fs-5 bold-text text-uppercase text-white"
            >
              Metamask
            </span>
          </div>
          <div
            _ngcontent-vsv-c60=""
            role="button"
            class="cursor-pointer walletBtn"
            style={{cursor:"pointer"}}
            onClick={()=>(dispatch(getUserProfile({id:1,chain:props.IsId})),props.onHide())}
          >
            <img
              _ngcontent-vsv-c60=""
              src={wallet_connect}
              alt="wallet connect"
              class="walletIcon mb-3"
            />
            <span
              _ngcontent-vsv-c60=""
              class="d-block fs-5 bold-text text-uppercase mt-3 text-white"
            >
              Wallet Connect
            </span>
          </div>
         
        </div>
      
      </Modal.Body>
   
    </Modal>
  );
}

export default WalletModal;
