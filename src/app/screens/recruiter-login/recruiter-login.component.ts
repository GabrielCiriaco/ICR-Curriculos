import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // <- ESSENCIAL
import { MatIconModule } from '@angular/material/icon'; // <- ESSENCIAL
import { MatButtonModule } from '@angular/material/button'; // <- ESSENCIAL
import { Router } from '@angular/router';


@Component({
  selector: 'app-recruiter-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './recruiter-login.component.html',
  styleUrl: './recruiter-login.component.scss'
})
export class RecruiterLoginComponent implements OnInit {
  hidePassword: boolean = true;

  //Formulário de Login
    loginForm: FormGroup = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  
    constructor(
      private router: Router,
    ) { }
  
    ngOnInit(): void {
      
      // localStorage.clear();
    }
  
    changeHidePassword(): void {
      this.hidePassword = !this.hidePassword;
    }
  
    login(): void {
      this.router.navigate(['/menu']);
      console.log(this.loginForm.value);
    }
}

