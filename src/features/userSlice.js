import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


import Web3 from "web3";
import { BRIDGE_URL, CHAIN_ID, RPC_URL } from '../config';

import WalletConnectProvider from '@walletconnect/web3-provider';
import axios from 'axios';
import { loadWeb3 } from '../api';




export const getUserProfile = createAsyncThunk("user/getUserProfile", async (chose, { rejectWithValue }) => {
    try {
        console.log("chose",chose);
        //    const {data}= await axios.get("https://server.nftapi.online/get_Bid_History")
        let data = {}
        if (chose.id === 1) {

            let provider = new WalletConnectProvider({
                infuraId: "6caa6ac543a94eacaf54e0ca062fcc99",
                bridge: BRIDGE_URL,
                rpc: {
                    [CHAIN_ID]: RPC_URL,
                },
            });

            //subscribe to account changed
            provider.on("accountChanged", (accounts) => {
                console.log("accounts changed", accounts);

            });

            //subscribe to chainId changed
            provider.on("chainChanged", (chainId) => {
                console.log("accounts changed", chainId);
            });

            //subscribe to session disconnect
            provider.on("disconnect", (code, reason) => {
                console.log("reason code", code, reason);
            });
            await provider.enable();
            const web3 = new Web3(provider);
            const accounts = await web3.eth.getAccounts();
            console.log("accounts", accounts[0]);
            data = {
                providerType: 1,
                provider: provider,
                web3: web3,
                account: accounts[0]
            }
        } else if (chose.id === 2) {
            console.log("chosechainId",chose.chain);
            if (chose.chain == 56) {

                let acc = await loadWeb3(56);
                console.log("Acc", acc);
                const web3 = window.web3;
                let accounts = await web3.eth.getAccounts();
                console.log("Acc", accounts);
                data = {
                    providerType: 2,
                    provider: web3,
                    web3: web3,
                    account: acc,
                    networkChange: chose.net
                }
            } else {
                let acc = await loadWeb3(1);
                console.log("Acc", acc);
                const web3 = window.web3;
                let accounts = await web3.eth.getAccounts();
                console.log("Acc", accounts);
                data = {
                    providerType: 2,
                    provider: web3,
                    web3: web3,
                    account: acc,
                    networkChange: chose.net
                }
            }

        }


        return data;

    } catch (error) {
        rejectWithValue(error.response.data)

    }
})


const userLorem = createSlice({
    name: 'user',
    initialState: {
        networkChange: "bsc",
        data: [],
        isSuccess: false,
        message: "",
        loading: false,

    },
    reducers: {
        change_net: (state, action) => {
            console.log('userauth action ', action.payload.networkChange)
            state.networkChange = action.payload.networkChange;

        },
    },
    extraReducers: {

        [getUserProfile.pending]: (state, { payload }) => {
            state.loading = true
        },
        [getUserProfile.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true
        },
        [getUserProfile.rejected]: (state, { payload }) => {
            state.loading = false;
            state.message = payload;
            state.isSuccess = false
        }
    }
})
export const { change_net } = userLorem.actions;

export default userLorem