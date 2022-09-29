import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreatePetComponent } from './components/create-pet-component/create-pet.component';
import { PetsComponent } from './components/pet-list-component/pets.component';
import { KilogramsPipe } from '../pipes/kilograms.pipe';

@NgModule({
    declarations: [PetsComponent, CreatePetComponent, KilogramsPipe],
    imports: [CommonModule, PetsRoutingModule, SharedModule],
})
export class PetsModule {}
