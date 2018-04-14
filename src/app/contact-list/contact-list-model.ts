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


export const validationMessage={
  firstName:'First Name required',
  lastName:'Last Name required',
  contact:'Should be 10 characters and requied',
  email:'Please enter valid email',
  status:'Please select one of the option'
}

export const statusValues=[
  'Active',
  'Inactive'
]
