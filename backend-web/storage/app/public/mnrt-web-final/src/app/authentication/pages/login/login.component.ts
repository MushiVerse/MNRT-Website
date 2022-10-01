import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { ServiceService } from 'src/app/shared/services/service.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sharedservices: ServiceService, public spinner: SpinnerService, private router: Router, private message: MessagesService) { }
  LoginForm!: FormGroup;

  ngOnInit(): void {
    //Form Validation
    this.LoginForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required]),
     
    });
  }

  onLogin(){
    var formdata = new FormData();
    formdata.append("email", this.LoginForm.value.email);
    formdata.append("password", this.LoginForm.value.password);

    // formdata.append("email", "maro.emmanuel1@gmail.com");
    // formdata.append("password", "12345678");

    this.spinner.isCMSLoading.next(true);
    this.sharedservices.getUserData(formdata).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      console.log(result);
      if(result.token != null){

        this.sharedservices.saveUserData(result);
        this.router.navigate(['/cms/home']);
      }
      else{
        this.message.openFailureSnackBar("Wrong email or password!")
      }

    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });

  }

}
