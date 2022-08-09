import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngxs/store";
import {GetUserInfo} from "../../../../libs/actions/user.action";
import {UserState} from "../../../../libs/states/user.state";

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {
  itemForm!: FormGroup;
  //isUserType = true;
  tableData = [
    {
      name: "selin",
      description: "abc",
      status: "active",
      creationDate: "01.01.0001"
    },
    {
      name: "selin1",
      description: "def",
      status: "active",
      creationDate: "02.02.0002"
    },
    {
      name: "selin2",
      description: "cvb",
      status: "active",
      creationDate: "03.03.0003"
    }
  ]

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(new GetUserInfo());

    this.store.selectSnapshot(UserState.user); //veriyi okuma işlemi

    //kullanıcı girişinin user mi admin mi olduğununun kontrolü burda yapılacak
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
}
