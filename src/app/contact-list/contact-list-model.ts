export class contactListModel{
  firstName:string;
  lastName:string;
  contact:number;
  email:string;
  status:string;
  constructor(firstName,lastName,contact,email,status){
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
    this.email = email;
    this.status = status;
  }
}
