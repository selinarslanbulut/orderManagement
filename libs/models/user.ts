import {StoreOptions} from "@ngxs/store/src/symbols";

export namespace User {
  export const NAME = 'UserState';
  export const DEFAULTS = {
    inquireUserData: {} as InquireUserResponse,
    result: null
  } as State;
  export const OPTIONS = { name: NAME, defaults: DEFAULTS } as StoreOptions<State>;
  export interface State {
    inquireUserData: InquireUserResponse;
    result:any;
  }
  export interface CreateRequest{
    userTypeList: UserTypeList;
  }

  // user api
  export interface UserTypeList{
    userId? : number;
    name? : string;
    description?: string;
    shortCode?: string;
    isActive?: string;
    entityCodeName?: string; //////////////////////
  }

  export interface InquireUserRequest{
    userName:string;
    password: string;
  }

  export interface InquireUserResponse {
    userTypeList: UserTypeList;
    returnCode: string;
    returnMessage: string;
  }
//offer api
  export  interface  OfferTypeList{
    id: number;
    name: string;
    description: string;
    status: string;
    creationDate: Date;
  }

  export interface inquireOffersRequest{
    userId: number;
  }

  export interface  inquireOffersResponse{
    offerTypeList: OfferTypeList;
    returnCode: string;
    returnMessage: string;
  }
}

