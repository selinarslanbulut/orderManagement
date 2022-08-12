import {StoreOptions} from "@ngxs/store/src/symbols";



export namespace  Offer {
  export const NAME = 'OfferState';
  export const DEFAULTS = {
    inquireOfferData: {} as InquireOffersResponse,
    result: null
  } as State;
  export const OPTIONS = { name: NAME, defaults: DEFAULTS } as StoreOptions<State>;
  export interface State{
    inquireOfferData: InquireOffersResponse;
    result:any;
  }

  export interface CreateOfferRequest{
    offerTypeList: OfferTypeList;
  }
  export  interface  OfferTypeList{
    id: number;
    name: string;
    description: string;
    status: string;
    creationDate: string;
  }

  export interface InquireOffersRequest{
    userId: number;
  }

  export interface  InquireOffersResponse{
    offerTypeList: OfferTypeList;
    returnCode: string;
    returnMessage: string;
  }

}
