import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngxs/store";
import {SelectedOfferState} from "../../../libs/states/selectedOffer.state";
import {SelectedOffer} from "../../../libs/models/selectedOffer";

@Component({
  selector: 'app-selected-offer-page',
  templateUrl: './selected-offer-page.component.html',
  styleUrls: ['./selected-offer-page.component.css']
})
export class SelectedOfferPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) { }


  itemOfferForm!: FormGroup;
  //itemOfferForm = new FormGroup({})
  selectOffer!: SelectedOffer.SelectedOfferResponse;

  ngOnInit(){
    console.log('offerdataa', this.store.selectSnapshot((SelectedOfferState.selectedOffer)))
    this.selectOffer= this.store.selectSnapshot(SelectedOfferState.selectedOffer);
    console.log('selectOffer', this.selectOffer);
    this.buildOfferForm();
  }

  get listOfferItems(): FormArray {
    return this.itemOfferForm.get('offerlist') as FormArray;
  }

  get selectedOfferItems(): any {
    console.log(this.itemOfferForm.get('selectedOfferItems')?.value)
    return this.itemOfferForm.get('selectedOfferItems')?.value;
  }

  selectOfferItem(item: any){
    this.itemOfferForm.get('selectedOfferItems')?.setValue(item);
    console.log(this.itemOfferForm)
  }

  buildOfferForm() {
    this.itemOfferForm = this.fb.group({
      list: this.fb.array(
        this.selectOffer.offerCharList.map((item) =>
          this.fb.group(item))
      ),
      selectedOfferItem: []
    })
    console.log(this.itemOfferForm);
  }
}
