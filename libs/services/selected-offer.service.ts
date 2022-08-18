import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {SelectedOffer,} from "../models/selectedOffer";

@Injectable({
  providedIn: 'root'
})
export class SelectedOfferService {

  constructor(private http: HttpClient) { }

  continueSelectedOffers(params:String, payload:number): Observable<SelectedOffer.SelectedOfferResponse>{
    const selectedOffer$ = of({
      offerCharList:
        [{
        offerTypeList:[
          {
            name: "Apple",
            description: "Iphone 13 Pro 256 gb",
            status: "active",
            creationDate: "01.01.2022"
          }
          ],
          offerCharTypeList:[
            {
              charValueId: 1212,
              color: "red",
              memory: "128 GB",
              size: "13 PRO"
            }
            ]
        }],
      returnCode: "success",
      returnMessage: "success"
    });
    return selectedOffer$;
  }
}
