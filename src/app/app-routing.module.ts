import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthenticateGuard } from './guards/authenticate.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'pets',
        canActivate: [AuthenticateGuard],
        loadChildren: () => import('./pets/pets.module').then((x) => x.PetsModule),
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
