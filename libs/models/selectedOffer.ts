import {StoreOptions} from "@ngxs/store/src/symbols";
import {Offer} from "./offer";

export namespace SelectedOffer{
  import OfferTypeList = Offer.OfferTypeList;
  export const NAME = 'SelectedOfferState';
  export const DEFAULTS = {
    selectedOfferData: {} as SelectedOfferResponse,
    result: null
  } as State;
  export const OPTIONS = { name: NAME, defaults: DEFAULTS } as StoreOptions<State>;
  export interface State{
    selectedOfferData: SelectedOfferResponse;
    result:any;
}
export interface CreateSelectedOfferRequest{
    offerCharList: OfferCharList;
}

export interface  OfferCharList{
  offerTypeList: OfferTypeList[];
  id?: number;
  name?: string;
  description?: string;
  status?: string;
  creationDate?: string;
  }

  export interface  OfferCharTypeList{
    charValueId: number,
    color: string,
    memory: string,
    size: string
  }

  export interface List {
    offerTypeList: Offer.OfferTypeList[];
    offerCharTypeList: OfferCharTypeList[];
  }

  export interface  SelectedOfferResponse{
    offerCharList: List[];
    returnCode: string;
    returnMessage: string;
  }
}
