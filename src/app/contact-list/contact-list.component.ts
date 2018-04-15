import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {contactListModel, validationMessage, statusValues} from "./contact-list-model";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactListForm: FormGroup;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  validationMessageList = {};
  statusValus: string[] = [];
  formSubmitted: boolean = false;
  contactListData: contactListModel[] = [];
  private currentIndex: number =null;
  savedStatus:string ='';
  contactListModel = new contactListModel();

  constructor(private _fb: FormBuilder) {
    this.setInitilizationValues();
    this.setModelData();
  }

  ngOnInit() {
    this.intializeForm();
  }

  setInitilizationValues() {
    this.validationMessageList = validationMessage;
    this.statusValus = statusValues;
  }

  /* Initialize form with setup validations*/
  intializeForm() {
    this.contactListForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contact: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      status: ['', Validators.required]
    })
  }
/* On click of add contact button checking validations and saved data*/
  addContact(data) {
    this.savedStatus ='';
    this.formSubmitted = true;
    if (this.contactListForm.valid) {
      this.contactListData.push(data);
      this.resetForm();
      this.formSubmitted = false;
      this.savedStatus = 'Data has been saved successfully';
    }
    this.resetDataSavedStatus();
  }
/* Edit Data*/
  editData(item,index){
    this.currentIndex = index;
    this.contactListForm.patchValue(item);
  }
  updateData(data:any){
    this.savedStatus ='';
    if(this.contactListForm.valid){
      this.contactListData[this.currentIndex]=data;
      this.currentIndex = null;
      this.resetForm();
      this.savedStatus = 'Data has been saved updated successfully';
    }
   this.resetDataSavedStatus();
  }

  /* Delete Data*/
  deleteData(item,index){
    if(index!==-1){
      this.contactListData.splice(index,1);
      this.savedStatus = 'Data has been saved Deleted successfully';
    }
    this.resetDataSavedStatus();
  }

/* Reset Form Data*/
  resetForm(){
    this.contactListForm.reset();
  }

  resetDataSavedStatus(){
    setTimeout(()=>{
      this.savedStatus ='';
    },2500);
  }
  setModelData(){
    this.contactListModel.contact = undefined;
    this.contactListModel.email = undefined;
    this.contactListModel.status = undefined;
    this.contactListModel.firstName = undefined;
  }

}
