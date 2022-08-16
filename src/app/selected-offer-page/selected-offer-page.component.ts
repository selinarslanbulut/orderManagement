import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngxs/store";

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



  ngOnInit(): void {
  }

}
