import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/account/user.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.scss'],
})
export class CreationCompteComponent {
  formData: any = {};
  myForm!: FormGroup;
  // employees: Employee[] = [];

  constructor(private userService: UserService ,private formBuilder: FormBuilder) {}

  ngOnInit() {

    // this.userService.getEmployees()
    // .pipe(
    //   catchError(error => {
    //     console.log('Error fetching employees', error);
    //     return of([]); 
    //   })
    // )
    // .subscribe(employees => this.employees = employees);

    this.myForm = this.formBuilder.group({
      id: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      // mail: ['', [Validators.required, Validators.email]],
      mail: ['', [Validators.required]],
      manager: [''],
      isAdmin: [false],
      isManager: [false],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // datas
      const formData = this.myForm.value;
        
      this.userService.createUser(formData).pipe(
          catchError(error => {
            console.log('Error creating user', error);
            // Handle error here
            return of(null); // Handle the error and return a new observable
          })
        ).subscribe(response => {
          if (response !== null) {
            console.log('User created', response);
          }
        });
    }
  } 
}
