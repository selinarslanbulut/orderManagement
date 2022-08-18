import {Action, Selector, State, StateContext} from "@ngxs/store";
import {SelectedOffer} from "../models/selectedOffer";
import {Injectable} from "@angular/core";
import {SelectedOfferService} from "../services/selected-offer.service";
import {ContinueSelectedOfferData} from "../actions/selectedOffer.action";
import {tap} from "rxjs/operators";
import { SELECTED_OFFER_DEFAULTS} from "../defaults/selectedOffer.defaults";

@State<SelectedOffer.State>(SelectedOffer.OPTIONS)
@Injectable()

export class SelectedOfferState{
  constructor(private selectedOfferService: SelectedOfferService) {}

  @Selector()
  static selectedOffer({selectedOfferData}: SelectedOffer.State): SelectedOffer.SelectedOfferResponse{
    return selectedOfferData;
  }

  @Action(ContinueSelectedOfferData)
  continueSelectedOffer(
    {patchState}: StateContext<SelectedOffer.State>,
    payload:number){
    return this.selectedOfferService.continueSelectedOffers('continueSelectedOffers', payload).pipe(
      tap( response => {
        console.log('inquireOfferData',response)

        patchState({
          selectedOfferData: response,
        })
      }),
    );
  }
}
