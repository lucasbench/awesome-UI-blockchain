import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/awesome/awesome/tx";
import { QueryParamsResponse } from "./types/awesome/awesome/query";
import { Params } from "./types/awesome/awesome/params";
import { GenesisState } from "./types/awesome/awesome/genesis";
import { QueryParamsRequest } from "./types/awesome/awesome/query";
import { MsgUpdateParamsResponse } from "./types/awesome/awesome/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/awesome.awesome.MsgUpdateParams", MsgUpdateParams],
    ["/awesome.awesome.QueryParamsResponse", QueryParamsResponse],
    ["/awesome.awesome.Params", Params],
    ["/awesome.awesome.GenesisState", GenesisState],
    ["/awesome.awesome.QueryParamsRequest", QueryParamsRequest],
    ["/awesome.awesome.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }