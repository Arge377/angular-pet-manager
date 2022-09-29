import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimalKind } from 'src/app/interfaces/animal-kind';
import { Color } from 'src/app/interfaces/color';
import { Gender } from 'src/app/interfaces/gender';
import { Pet } from 'src/app/interfaces/pet';
import { AnimalKindService } from 'src/app/services/animal-kind.service';
import { ColorService } from 'src/app/services/color.service';
import { GenderService } from 'src/app/services/gender.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
    selector: 'app-create-pet',
    templateUrl: './create-pet.component.html',
    styleUrls: ['./create-pet.component.css'],
})
export class CreatePetComponent implements OnInit {
    subscription: Subscription = new Subscription();
    petColor: string = '';
    form: FormGroup;
    colors: Color[] = [];
    genders: Gender[] = [];
    animalsKind: AnimalKind[] = [];

    constructor(
        private activeRoute: ActivatedRoute,
        private genderService: GenderService,
        private colorService: ColorService,
        private animalKindService: AnimalKindService,
        private petService: PetService,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        private router: Router
    ) {
        this.form = this.formBuilder.group({
            id: [crypto.randomUUID()],
            name: ['', [Validators.required]],
            animal: [null, Validators.required],
            birth: ['', [Validators.required]],
            weight: ['', [Validators.required, Validators.min(1), Validators.max(40)]],
            gender: [null, Validators.required],
            color: [null, Validators.required],
            createDate: [new Date()],
        });
    }

    ngOnInit(): void {
        this.loadData();
        this.subscription.add(
            this.activeRoute.params.subscribe((params) => {
                const id = params['id'];
                if (id) {
                    const pet = this.petService.getPet(id);
                    this.form.patchValue(pet);
                }
            })
        );
    }

    loadData() {
        this.subscription.add(
            this.colorService.getColors().subscribe((colors) => {
                this.colors = colors;
            })
        );
        this.subscription.add(
            this.genderService.getGenders().subscribe((genders) => {
                this.genders = genders;
            })
        );
        this.subscription.add(
            this.animalKindService.getAnimalsKind().subscribe((animalsKind) => {
                this.animalsKind = animalsKind;
            })
        );
    }

    changeColor(color: string) {
        this.petColor = color;
        this.getColor();
    }

    getColor() {
        return this.petColor;
    }

    savePet() {
        this.petService.createOrUpdatePet(this.form.value as Pet);
        this.router.navigate(['/pets']);
        this.snackBar.open('Pet Save successfully', '', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }

    ngDestroy() {
        this.subscription.unsubscribe();
    }
}
