import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Offer} from "../models/offer";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private  http: HttpClient) { }

  inquireOffers(params:string, payload: number): Observable<Offer.InquireOffersResponse>{
    const offerData$ = of( {
      offerTypeList:
        [
          {
            name: "Apple",
            description: "Iphone 13 Pro 256 gb",
            status: "active",
            creationDate: "01.01.2022"
          },
          {
            name: "Oppo",
            description: "A55 64 Gb",
            status: "active",
            creationDate: "02.02.2022"
          },
          {
            name: "Samsung",
            description: "Galaxy A32 128 Gb",
            status: "active",
            creationDate: "03.03.2022"
          },
          {
            name: "Huawei",
            description: "Nova 9 SE 128 Gb",
            status: "active",
            creationDate: "03.03.2022"
          },
          {
            name: "Xiaomi",
            description: "Redmi 10 64 Gb",
            status: "active",
            creationDate: "03.03.2022"
          }
        ],
      returnCode: "success",
      returnMessage: "success"
    });
    return offerData$;
  }
}
