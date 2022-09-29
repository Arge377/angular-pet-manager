import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, NavbarComponent],
    imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
