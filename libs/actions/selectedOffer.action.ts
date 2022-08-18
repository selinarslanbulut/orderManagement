import { SelectedOffer} from "../models/selectedOffer";



export class SelectedOfferPageComponent{
  static readonly desc = 'getting table data';
  static readonly type = '[SelectedOffer] SelectedOfferPageComponent';
  constructor(public payload: number) {}
}
export class CreateSelectedOffer {
  static readonly  desc = '';
  static readonly  type = '[SelectedOffer] CreateSelectedOffer';
  constructor(public payload: SelectedOffer.CreateSelectedOfferRequest) {}
}
export class ContinueSelectedOfferData {
  static readonly  desc = '';
  static readonly  type = '[SelectedOffer] SelectedOffer';
  constructor(public payload: number) {}
}
