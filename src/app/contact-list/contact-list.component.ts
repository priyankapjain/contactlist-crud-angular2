import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {contactListModel, validationMessage, statusValues} from "./contact-list-model";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactListForm:FormGroup;
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  validationMessageList={};
  statusValus:string[]=[];

  constructor(private _fb: FormBuilder) {
    this.setInitilizationValues();
  }

  ngOnInit() {
    this.intializeForm();
  }

  setInitilizationValues(){
    this.validationMessageList = validationMessage;
    this.statusValus = statusValues;
  }
  intializeForm(){
    this.contactListForm = this._fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      contact:['',Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      email:['',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]],
      status:['',Validators.required]
    })
  }

  addContact(data){
 console.log('*******************');
 console.log(data);
 console.log(this.contactListForm);
  }

}
