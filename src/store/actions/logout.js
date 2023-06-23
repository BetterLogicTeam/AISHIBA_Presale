

import { types } from "../type";

export const disconnectWallet =  () => (dispatch)=>{
    try {
        dispatch({
            type:types.diconnect_wallet,
            payload:{
                provider:null,
                account:null
            }
        })
    } catch (error) {
        console.error("error while disconnect wallet", error);
    }
}

export const change_Metamask =  (chose) => (dispatch)=>{
    try {
        console.log("dispatch");

        dispatch({
            type:types.changeMetamask,
            payload:{
                changeMetamask:1,
            }
        })
    } catch (error) {
        console.error("error while disconnect wallet", error);
    }
}