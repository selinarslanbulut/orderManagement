import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngxs/store";
import {GetUserInfo} from "../../../../libs/actions/user.action";
import {UserState} from "../../../../libs/states/user.state";
import {Router} from "@angular/router";
import {GetOfferInfo} from "../../../../libs/actions/offer.action";
import {OfferState} from "../../../../libs/states/offer.state";

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router) {
  }

  itemForm!: FormGroup;
  isUserTypeAdmin!: boolean;
  isUserTypeUser!: boolean;
  tableData = [
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
  ]

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(new GetUserInfo());
    this.store.dispatch(new GetOfferInfo());

    const user = this.store.selectSnapshot(UserState.user); //veriyi okuma işlemi
    this.isUserTypeAdmin = user.userTypeList.entityCodeName === "admin"
    console.log(this.isUserTypeAdmin)
    //kullanıcı girişinin user mi admin mi olduğununun kontrolü burda yapılacak

    const offer = this.store.selectSnapshot((OfferState.offer)); //veriyi okuma işlemi

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
