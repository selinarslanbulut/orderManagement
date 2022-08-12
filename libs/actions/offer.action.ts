import {User} from "../models/user";
import {Offer} from "../models/offer";


export class UserScreenComponent{
  static readonly desc = 'getting table data';
  static readonly type = '[Offer] UserScreenComponent';
  constructor(public payload: number) {}
}

export class CreateOffer {
  static readonly  desc = '';
  static readonly  type = '[Offer] CreateOffer';
  constructor(public payload: Offer.CreateOfferRequest) {}
}
export class GetOfferInfo {
  static readonly  desc = '';
  static readonly  type = '[Offer] CreateOffer';
  constructor() {}
}


export class InquireOffer {
  static readonly  desc = '';
  static readonly  type = '[User] InquireOffer';
  constructor(public payload: Offer.InquireOffersRequest) {}
}
