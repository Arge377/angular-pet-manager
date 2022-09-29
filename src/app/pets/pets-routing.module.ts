import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePetComponent } from './components/create-pet-component/create-pet.component';
import { PetsComponent } from './components/pet-list-component/pets.component';

const routes: Routes = [
    { path: '', component: PetsComponent },
    { path: 'create-pet', component: CreatePetComponent },
    { path: 'edit-pet/:id', component: CreatePetComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PetsRoutingModule {}
