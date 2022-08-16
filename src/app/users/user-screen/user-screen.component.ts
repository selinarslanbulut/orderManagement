import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngxs/store";
import {GetUserInfo, InquireUser} from "../../../../libs/actions/user.action";
import {UserState} from "../../../../libs/states/user.state";
import {Router} from "@angular/router";
import {GetOfferInfo, InquireOffer} from "../../../../libs/actions/offer.action";
import {OfferState} from "../../../../libs/states/offer.state";
import {Offer} from "../../../../libs/models/offer";

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router) { }

  itemForm!: FormGroup;
  isUserTypeAdmin!: boolean;
  isUserTypeUser!: boolean;
  tableData!: Offer.OfferTypeList[];

  ngOnInit() {
    const user = this.store.selectSnapshot(UserState.user); //veriyi okuma işlemi
    const userId = 123;
    this.store.dispatch(new InquireOffer(userId)).subscribe((response) =>{
      console.log('InquireOffer', response);
    });

    this.isUserTypeAdmin = user.userTypeList.entityCodeName === "admin"
    console.log('isUserTypeAdmin', this.isUserTypeAdmin)
    //kullanıcı girişinin user mi admin mi olduğununun kontrolü burda yapılacak
    console.log('data', this.store.selectSnapshot((OfferState.offer)))
    this.tableData = this.store.selectSnapshot((OfferState.offer)).offerTypeList; //veriyi okuma işlemi
    console.log('tableData', this.tableData);
    this.buildForm();
  }

  get listOfItems(): FormArray {
    return this.itemForm.get('list') as FormArray;
  }

  get selectedOfItems(): any {
    console.log(this.itemForm.get('selectedItem')?.value)
    return this.itemForm.get('selectedItem')?.value;
  }

  selectItem(item: any){
    this.itemForm.get('selectedItem')?.setValue(item);
    console.log(this.itemForm)
  }

  buildForm(){
    this.itemForm =this.fb.group({
      list:this.fb.array(
        this.tableData.map(item =>
        this.fb.group(item))
      ),
      selectedItem:[]
    })
    // this.itemForm =this.fb.group(
    //   this.fb.array(
    //     this.tableData.map(item =>
    //       this.fb.group(item))
    //   )
    // )
    console.log(this.itemForm)
  }

  selectedOfferClick() {
    this.router.navigate(['selectedOffer']);
  }
}
