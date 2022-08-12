import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {OfferService} from "../services/offer.service";
import {Offer} from "../models/offer";
import InquireOffersResponse = Offer.InquireOffersResponse;
import {InquireOffer} from "../actions/offer.action";
import {tap} from "rxjs/operators";
import {OFFER_DEFAULTS} from "../defaults/offer.defaults";


@State<Offer.State>(Offer.OPTIONS)
@Injectable()

export class OfferState{
  constructor(private offerService: OfferService) {}


  @Selector()
  static offer({ inquireOfferData}: Offer.State): Offer.InquireOffersResponse{
    return inquireOfferData;
  }


  @Action(InquireOffer)
  inquireOffer(
    { patchState}: StateContext<Offer.State>,
    payload: Offer.InquireOffersRequest) {
    return this.offerService.inquireOffers('inquireOffer', payload).pipe(
      tap( response => {
        console.log(response)

        patchState({
          inquireOfferData: response,
        })
      }
      ),
    );
  }
}
