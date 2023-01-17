import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm!: FormGroup;
  submitClicked:boolean = false;
  passwordVisiblity: boolean = false;

  
  constructor(private fb: FormBuilder){}

  initLoginForm(){
    this.loginForm = this.fb.group(
      {
       
        email: [
           '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
          ],
        ],
      
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/
            ),
          ],
        ],
      },
 
    )
  }

  get formControls() {
    return this.loginForm.controls;
  }
  ngOnInit():void{
    this.initLoginForm();
  }
  onSubmit(){
    this.submitClicked = true;

    if (this.loginForm.invalid) {
			this.loginForm.markAllAsTouched();
			return;
		}
  }

  togglePassword(){
    this.passwordVisiblity = !this.passwordVisiblity;
  }

}
