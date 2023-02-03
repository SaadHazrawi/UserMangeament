import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private service: UserService,
    private router: Router,
    private FB: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.FB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.service.login(this.loginForm.value).subscribe({
      next: (result) => {
        this.service.setToken(result.token);
        this.router.navigate(['./users']);
      },
      error: (err) => {
        this.loginForm.setValue({
          email: '',
          password: '',
        });
      },
    });
  }
}
