import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthenticateService {
    constructor() {}

    authenticate(username: string, password: string): boolean {
        const isAuthenticate = username.toLocaleLowerCase() === 'admin' && password === '123' ? true : false;
        isAuthenticate && localStorage.setItem('token', crypto.randomUUID());
        return isAuthenticate;
    }
}
