import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/account/user.service';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.scss'],
})
export class CreationCompteComponent {
  formData: any = {};
  myForm!: FormGroup;

  constructor(private userService: UserService ,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      lastName: ['', Validators.required],
      // mail: ['', [Validators.required, Validators.email]],
      mail: ['', [Validators.required]],
      manager: [''],
      isAdmin: [false],
      isManager: [false],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.userService.createUser(formData).subscribe(
        response => {
          console.log('User created', response);
          // Handle successful user creation here
        },
        error => {
          console.log('Error creating user', error);
          // Handle error here
        }
      );
    }
  }  
}
