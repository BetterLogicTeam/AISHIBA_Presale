import Web3 from "web3";
let isItConnected = false;
// let id = 97
// let setId = localStorage.getItem("switch_net")
// console.log("setId", setId);
// if (setId?.toString() == "bsc") {
//   id = 97
// } else {
//   id = 5
// }

const changeNetwork = async ({ id }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    const web3 = window.web3;
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: web3.utils.toHex(id) }]
    });
    window.location.reload();

  } catch (err) {
    console.log(err, "not found");
  }
};
const handleNetworkSwitch = async (id) => {
  await changeNetwork({ id });
};
let accounts;
const getAccounts = async () => {
  const web3 = window.web3;
  try {
    accounts = await web3.eth.getAccounts();
    return accounts;
  } catch (error) {
    console.log("Error while fetching acounts: ", error);
    return null;
  }
};
export const disconnectWallet = async () => {
  await window.ethereum.request({
    method: "eth_requestAccounts",
    params: [{ eth_accounts: {} }],
  });
  console.log("disconnect");
};
export const loadWeb3 = async (id) => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      await window.web3.eth.getChainId((err, netId) => {
        console.log("networkId==>", netId);
        if (netId.toString() == id?.toString()) {
          isItConnected = true;
        } else {
          handleNetworkSwitch(id);
          isItConnected = false;
        }
        // switch (netId.toString()) {
        //   case "97":
        //     isItConnected = true;
        //     break;
        //   default:
        //     handleNetworkSwitch("bsc");
        //     isItConnected = false;
        // }
      });
      if (isItConnected == true) {
        let accounts = await getAccounts();
        console.log("accounts", accounts);
        return accounts[0];
      } else {
        let res = "Wrong Network";
        return res;
      }
    } else {
      let res = "No Wallet";
      return res;
    }
  } catch (error) {
    let res = "No Wallet";
    return res;
  }
};