import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    isAuthenticated: boolean = false;
    hide: boolean = true;
    title: string = 'Welcome to Hoppets';
    form: UntypedFormGroup;
    username: string = '';
    password: string = '';
    loading: boolean = false;

    constructor(
        private authenticateService: AuthenticateService,
        private fb: FormBuilder,
        private snackBar: MatSnackBar,
        private router: Router
    ) {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login() {
        this.username = this.form.value.username;
        this.password = this.form.value.password;
        this.isAuthenticated = this.authenticateService.authenticate(this.username, this.password);
        this.isAuthenticated ? this.fakeLoading() : this.error();
    }

    error() {
        this.snackBar.open('Username or Password are invalid', '', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
        this.form.reset();
    }

    fakeLoading() {
        this.loading = true;
        setTimeout(() => {
            this.router.navigate(['pets']);
        }, 1500);
    }
}
