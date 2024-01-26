// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { QueryParamsResponse } from "./types/cosmos/auth/v1beta1/query";
import { AddressStringToBytesResponse } from "./types/cosmos/auth/v1beta1/query";
import { GenesisState } from "./types/cosmos/auth/v1beta1/genesis";
import { QueryAccountResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/auth/v1beta1/query";
import { AddressBytesToStringRequest } from "./types/cosmos/auth/v1beta1/query";
import { AddressBytesToStringResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountAddressByIDRequest } from "./types/cosmos/auth/v1beta1/query";
import { ModuleAccount } from "./types/cosmos/auth/v1beta1/auth";
import { QueryModuleAccountByNameResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountInfoRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountsResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountsRequest } from "./types/cosmos/auth/v1beta1/query";
import { Bech32PrefixRequest } from "./types/cosmos/auth/v1beta1/query";
import { AddressStringToBytesRequest } from "./types/cosmos/auth/v1beta1/query";
import { Params } from "./types/cosmos/auth/v1beta1/auth";
import { ModuleCredential } from "./types/cosmos/auth/v1beta1/auth";
import { QueryAccountInfoResponse } from "./types/cosmos/auth/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/auth/v1beta1/tx";
import { QueryModuleAccountsResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryModuleAccountByNameRequest } from "./types/cosmos/auth/v1beta1/query";
import { Bech32PrefixResponse } from "./types/cosmos/auth/v1beta1/query";
import { BaseAccount } from "./types/cosmos/auth/v1beta1/auth";
import { MsgUpdateParamsResponse } from "./types/cosmos/auth/v1beta1/tx";
import { QueryModuleAccountsRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountAddressByIDResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountRequest } from "./types/cosmos/auth/v1beta1/query";
export { QueryParamsResponse, AddressStringToBytesResponse, GenesisState, QueryAccountResponse, QueryParamsRequest, AddressBytesToStringRequest, AddressBytesToStringResponse, QueryAccountAddressByIDRequest, ModuleAccount, QueryModuleAccountByNameResponse, QueryAccountInfoRequest, QueryAccountsResponse, QueryAccountsRequest, Bech32PrefixRequest, AddressStringToBytesRequest, Params, ModuleCredential, QueryAccountInfoResponse, MsgUpdateParams, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, Bech32PrefixResponse, BaseAccount, MsgUpdateParamsResponse, QueryModuleAccountsRequest, QueryAccountAddressByIDResponse, QueryAccountRequest };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendQueryParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendAddressStringToBytesResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendAddressStringToBytesResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.addressStringToBytesResponse({ value: AddressStringToBytesResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendAddressStringToBytesResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGenesisState({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAccountResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAccountResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAccountResponse({ value: QueryAccountResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAccountResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendAddressBytesToStringRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendAddressBytesToStringRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.addressBytesToStringRequest({ value: AddressBytesToStringRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendAddressBytesToStringRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendAddressBytesToStringResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendAddressBytesToStringResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.addressBytesToStringResponse({ value: AddressBytesToStringResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendAddressBytesToStringResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAccountAddressByIDRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAccountAddressByIDRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAccountAddressByIdrequest({ value: QueryAccountAddressByIDRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAccountAddressByIDRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendModuleAccount({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendModuleAccount: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.moduleAccount({ value: ModuleAccount.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendModuleAccount: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryModuleAccountByNameResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryModuleAccountByNameResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryModuleAccountByNameResponse({ value: QueryModuleAccountByNameResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryModuleAccountByNameResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAccountInfoRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAccountInfoRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAccountInfoRequest({ value: QueryAccountInfoRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAccountInfoRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAccountsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAccountsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAccountsResponse({ value: QueryAccountsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAccountsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAccountsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAccountsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAccountsRequest({ value: QueryAccountsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAccountsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendBech32PrefixRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendBech32PrefixRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.bech32PrefixRequest({ value: Bech32PrefixRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendBech32PrefixRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendAddressStringToBytesRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendAddressStringToBytesRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.addressStringToBytesRequest({ value: AddressStringToBytesRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendAddressStringToBytesRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.params({ value: Params.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendModuleCredential({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendModuleCredential: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.moduleCredential({ value: ModuleCredential.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendModuleCredential: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAccountInfoResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAccountInfoResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAccountInfoResponse({ value: QueryAccountInfoResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAccountInfoResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryModuleAccountsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryModuleAccountsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryModuleAccountsResponse({ value: QueryModuleAccountsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryModuleAccountsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryModuleAccountByNameRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryModuleAccountByNameRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryModuleAccountByNameRequest({ value: QueryModuleAccountByNameRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryModuleAccountByNameRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendBech32PrefixResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendBech32PrefixResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.bech32PrefixResponse({ value: Bech32PrefixResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendBech32PrefixResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendBaseAccount({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendBaseAccount: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.baseAccount({ value: BaseAccount.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendBaseAccount: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryModuleAccountsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryModuleAccountsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryModuleAccountsRequest({ value: QueryModuleAccountsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryModuleAccountsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAccountAddressByIDResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAccountAddressByIDResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAccountAddressByIdresponse({ value: QueryAccountAddressByIDResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAccountAddressByIDResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAccountRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAccountRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAccountRequest({ value: QueryAccountRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAccountRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        queryParamsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse", value: QueryParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
            }
        },
        addressStringToBytesResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse", value: AddressStringToBytesResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:AddressStringToBytesResponse: Could not create message: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        queryAccountResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse", value: QueryAccountResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAccountResponse: Could not create message: ' + e.message);
            }
        },
        queryParamsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest", value: QueryParamsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
            }
        },
        addressBytesToStringRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest", value: AddressBytesToStringRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:AddressBytesToStringRequest: Could not create message: ' + e.message);
            }
        },
        addressBytesToStringResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse", value: AddressBytesToStringResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:AddressBytesToStringResponse: Could not create message: ' + e.message);
            }
        },
        queryAccountAddressByIdrequest({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest", value: QueryAccountAddressByIDRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAccountAddressByIDRequest: Could not create message: ' + e.message);
            }
        },
        moduleAccount({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.ModuleAccount", value: ModuleAccount.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ModuleAccount: Could not create message: ' + e.message);
            }
        },
        queryModuleAccountByNameResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse", value: QueryModuleAccountByNameResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryModuleAccountByNameResponse: Could not create message: ' + e.message);
            }
        },
        queryAccountInfoRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoRequest", value: QueryAccountInfoRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAccountInfoRequest: Could not create message: ' + e.message);
            }
        },
        queryAccountsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse", value: QueryAccountsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAccountsResponse: Could not create message: ' + e.message);
            }
        },
        queryAccountsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest", value: QueryAccountsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAccountsRequest: Could not create message: ' + e.message);
            }
        },
        bech32PrefixRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest", value: Bech32PrefixRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Bech32PrefixRequest: Could not create message: ' + e.message);
            }
        },
        addressStringToBytesRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest", value: AddressStringToBytesRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:AddressStringToBytesRequest: Could not create message: ' + e.message);
            }
        },
        params({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.Params", value: Params.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Params: Could not create message: ' + e.message);
            }
        },
        moduleCredential({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.ModuleCredential", value: ModuleCredential.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ModuleCredential: Could not create message: ' + e.message);
            }
        },
        queryAccountInfoResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoResponse", value: QueryAccountInfoResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAccountInfoResponse: Could not create message: ' + e.message);
            }
        },
        msgUpdateParams({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.MsgUpdateParams", value: MsgUpdateParams.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
            }
        },
        queryModuleAccountsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse", value: QueryModuleAccountsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryModuleAccountsResponse: Could not create message: ' + e.message);
            }
        },
        queryModuleAccountByNameRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest", value: QueryModuleAccountByNameRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryModuleAccountByNameRequest: Could not create message: ' + e.message);
            }
        },
        bech32PrefixResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse", value: Bech32PrefixResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Bech32PrefixResponse: Could not create message: ' + e.message);
            }
        },
        baseAccount({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.BaseAccount", value: BaseAccount.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:BaseAccount: Could not create message: ' + e.message);
            }
        },
        msgUpdateParamsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
            }
        },
        queryModuleAccountsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest", value: QueryModuleAccountsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryModuleAccountsRequest: Could not create message: ' + e.message);
            }
        },
        queryAccountAddressByIdresponse({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse", value: QueryAccountAddressByIDResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAccountAddressByIDResponse: Could not create message: ' + e.message);
            }
        },
        queryAccountRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest", value: QueryAccountRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAccountRequest: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            CosmosAuthV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
