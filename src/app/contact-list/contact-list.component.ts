import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactListForm:FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.intializeForm();
  }
  intializeForm(){
    this.contactListForm = this._fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      contact:['',Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      email:['',Validators.required],
      status:['',Validators.required]
    })
  }

}
