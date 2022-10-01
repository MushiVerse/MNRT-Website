import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { ServiceService } from 'src/app/shared/services/service.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private sharedservices: ServiceService, public spinner: SpinnerService, private router: Router, private message: MessagesService) { }
  RegisterForm!: FormGroup;

  ngOnInit(): void {
    //Form Validation
    this.RegisterForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      name: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),
      password2: new FormControl(null,[Validators.required])
    });
  }

  onSubmit(){
    var formdata = new FormData();
    formdata.append("name", this.RegisterForm.value.name);
    formdata.append("email", this.RegisterForm.value.email);
    formdata.append("password", this.RegisterForm.value.password);
    formdata.append("password_confirmation", this.RegisterForm.value.password2);
    // formdata.append("name", "Emmanuel Maro");
    // formdata.append("email", "maro.emmanuel1@gmail.com");
    // formdata.append("password", "12345678");
    // formdata.append("c_password", "123456");
    if(this.RegisterForm.value.password != this.RegisterForm.value.password2){
      this.message.openFailureSnackBar("Password must match!")
    }
    else{
      this.spinner.isCMSLoading.next(true);
      this.sharedservices.registerUser(formdata).subscribe(result=>{
        this.spinner.isCMSLoading.next(false);
        console.log(result);
        if(result.token != null){
          this.message.openSnackBar("Successifully registered!")
          this.router.navigate(['/cms']);
        }
        else{
          this.message.openFailureSnackBar("Unable to register!")
        }

      },errorResponse=>{
        console.log("Error: "+ errorResponse)
      });
    }
  }

}
