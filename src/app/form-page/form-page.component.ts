import { Component, OnInit } from '@angular/core';
import { Employee } from './employee'

@Component({
  selector: 'app-form-page',
  template: `
      <br><br><br><br>
      <div class="container-fluid">  
        <h1 class="text-center"> Employee Data Collection Form Page </h1>
        <form #empForm='ngForm' (ngSubmit)='onSubmit()' novalidate>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" required class="form-control" [(ngModel)]="empModel.name" #name="ngModel"
            [class.is-invalid]="name.invalid && name.touched" name="name" aria-describedby="emailHelp" placeholder="Enter employee name">
            <small class="text-danger" [class.d-none]="name.valid || name.untouched"> Name is required </small>
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="textbox" required class="form-control" [(ngModel)]="empModel.address" #address="ngModel"
            [class.is-invalid]="address.invalid && address.touched" name="address" placeholder="Enter employee address">
            <small class="text-danger" [class.d-none]="address.valid || address.untouched"> Address is required </small>
          </div>
          <div class="form-group">
            <label for="mobile">Mobile No.</label>
            <input type="tel" required class="form-control" [(ngModel)]="empModel.mobile" #mobile="ngModel"
            [class.is-invalid]="mobile.invalid && mobile.touched" name="mobile" placeholder="Enter mobile number" pattern="[0-9]{10}">
            
            <div *ngIf="mobile.errors && (mobile.valid||mobile.touched)">
              <small class="text-danger" *ngIf="mobile.errors.required">Mobile number is required.</small>
              <small class="text-danger" *ngIf="mobile.errors.pattern">Mobile number must be of 10 digit.</small>
            </div>
          </div>
          <div class="form-group">
            <label for="dob">Date of Birth</label>
            <input type="date" required class="form-control" [(ngModel)]="empModel.dob" #dob="ngModel"
            [class.is-invalid]="dob.invalid && dob.touched" name="dob">
            <small class="text-danger" [class.d-none]="dob.valid || dob.untouched"> Date of birth is required </small>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" required class="form-control" [(ngModel)]="empModel.email" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+" 
            #email="ngModel" [class.is-invalid]="email.invalid && email.touched" name="email" placeholder="Enter email">
            
            <div *ngIf="email.errors && (email.valid||email.touched)">
              <small class="text-danger" *ngIf="email.errors.required">Email is required.</small>
              <small class="text-danger" *ngIf="email.errors.pattern">Email must be in correct format</small>
            </div>
          </div>
          <button [disabled]="empForm.form.invalid || email.errors || mobile.errors" type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
  `,
  styles: [
    '.container-fluid{ width: 60%; text-align: "center"}'
  ]
})
export class FormPageComponent implements OnInit {

  constructor() { }
  empModel = new Employee('Monali','Damoh Naka, Jabalpur',1234567891,'2021-08-18','monali.koshta@quantiphi.com')

  ngOnInit(): void {
  }

  onSubmit(){
    // const res = {
    //   "name": this.empModel.name,
    //   "address": this.empModel.address,
    //   "mobile": this.empModel.mobile,
    //   "dob": this.empModel.dob,
    //   "email": this.empModel.email,
    // }
    
    alert('You can view the form data in console!')
    console.log(this.empModel)
    
  }

}
