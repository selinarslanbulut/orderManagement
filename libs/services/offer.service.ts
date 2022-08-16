import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Offer} from "../models/offer";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private  http: HttpClient) { }
  configUrl1 = 'https://jsonplaceholder.typicode.com/posts';
  configUrl = 'https://jsonplaceholder.typicode.com/';

  getAnimalService(){
    return this.http.get(this.configUrl1);
  }
  inquireOffers(params:string, payload: Offer.InquireOffersRequest): Observable<Offer.InquireOffersResponse>{
    const offerData$ = of( {
      offerTypeList:
        {
      id:123,
      name: "AAA",
      description: "aaadeneme",
      status: "abc",
      creationDate:"04.04.0004"
      },
      returnCode: "success",
      returnMessage: "success"
    });
    return offerData$;
  }
}
