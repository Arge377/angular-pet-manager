import { Injectable } from '@angular/core';
import { Pet } from '../interfaces/pet';

@Injectable({
    providedIn: 'root',
})
export class PetService {
    pets: Pet[] = [
        {
            id: '0',
            animal: 'Dog',
            name: 'Onix',
            birth: new Date('06/14/22'),
            weight: 9,
            color: 'Black',
            gender: 'Male',
            createDate: new Date('6-15-22, 9:03 AM'),
        },
        {
            id: '1',
            animal: 'Dog',
            name: 'Danko',
            birth: new Date('04/21/22'),
            weight: 10,
            color: 'Black',
            gender: 'Male',
            createDate: new Date('6-15-22, 9:03 AM'),
        },
        {
            id: '2',
            animal: 'Cat',
            name: 'Howk',
            birth: new Date('11/30/22'),
            weight: 6,
            color: 'Marbled',
            gender: 'Male',
            createDate: new Date('6-15-22, 9:03 AM'),
        },
        {
            id: '3',
            animal: 'Dog',
            name: 'Abril',
            birth: new Date('09/19/22'),
            weight: 12,
            color: 'Brown',
            gender: 'Female',
            createDate: new Date('6-15-22, 9:03 AM'),
        },
        {
            id: '4',
            animal: 'Dog',
            name: 'Hunter',
            birth: new Date('12/17/22'),
            weight: 15,
            color: 'Black',
            gender: 'Male',
            createDate: new Date('6-15-22, 9:03 AM'),
        },
        {
            id: '5',
            animal: 'Dog',
            name: 'Kala',
            birth: new Date('10/20/22'),
            weight: 10,
            color: 'Gray',
            gender: 'Female',
            createDate: new Date('6-15-22, 9:03 AM'),
        },
        {
            id: '6',
            animal: 'Cat',
            name: 'Agata',
            birth: new Date('02/06/21'),
            weight: 5,
            color: 'Marbled',
            gender: 'Female',
            createDate: new Date('6-15-22, 9:03 AM'),
        },
    ];

    getPets() {
        return [...this.pets];
    }

    getPet(id: string): Pet {
        const pet = this.pets.find((p) => p.id === id);
        return pet!;
    }

    createOrUpdatePet(pet: Pet) {
        const index = this.pets.findIndex((dbPet) => dbPet.id === pet.id);
        if (index !== -1) {   
            this.pets[index] = pet;
        } else {
            this.pets.unshift(pet);
        }
    }

    deletePet(id: string) {
        const index = this.pets.findIndex((p) => p.id === id);
        this.pets.splice(index, 1);
    }
}
