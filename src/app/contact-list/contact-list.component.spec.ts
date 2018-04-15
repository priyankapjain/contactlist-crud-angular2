import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ContactListComponent} from "./contact-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {SearchFilterPipe} from "./filter-search";
import {contactListModel} from "./contact-list-model";


fdescribe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule, HttpModule
      ],
      declarations: [ContactListComponent, SearchFilterPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should add data into contactlist array', () => {
    let formData = new contactListModel();
    component.contactListData = []
    formData.firstName = 'jain';
    formData.lastName = 'priyanka';
    formData.status = 'Active';
    formData.contact = 8095300088;
    formData.email = 'macha@gmail.com';
    component.contactListForm.patchValue(formData);
    component.addContact(formData);
    expect(component.formSubmitted).toBe(false);
    expect(component.contactListData.length).toBeGreaterThan(0);
  });
  it('should edit data on click of edit icon', () => {
    let item = {
      firstName: 'priya',
      lastName: 'jain',
      email: 'priya@gmail.com',
      contact: 9090123456,
      status: 'Active'
    };
    component.contactListData = [];
    component.editData(item, 0);
    expect(component.currentIndex).toBe(0)
  });
  it('should update data on click of update button', () => {
    let item = {
      firstName: 'priya',
      lastName: 'jain',
      email: 'priya@gmail.com',
      contact: 9090123456,
      status: 'Active'
    };
    component.contactListData = [];
    component.currentIndex=0;
    component.contactListForm.patchValue(item);
    component.updateData(item);
    expect(component.currentIndex).toBe(null)
  });
  it('should delete data on click of delete icon',()=>{
    let item = {
      firstName: 'priya',
      lastName: 'jain',
      email: 'priya@gmail.com',
      contact: 9090123456,
      status: 'Active'
    };
    component.contactListData = [];
    component.contactListData.push(item);
    component.deleteData(0);
    expect(component.contactListData.length).toBe(0);
  });
  it('should filter text for data in table while filtering data',()=>{
    let filterObj  = new SearchFilterPipe();
    // expect(filterObj.transform(undefined,'contact','90')).toEqual([]);
    expect(filterObj.transform([{contact:'909090'}],'contact',undefined)).toEqual([{contact:'909090'}]);
    expect(filterObj.transform([{contact:'909090'}],'contact','90')).toEqual([{contact:'909090'}]);
  })
});
