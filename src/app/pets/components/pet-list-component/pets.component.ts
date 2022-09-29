import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pet } from 'src/app/interfaces/pet';
import { PetService } from 'src/app/services/pet.service';
import { columns } from 'src/app/shared/constants/columns';

@Component({
    selector: 'app-pets',
    templateUrl: './pets.component.html',
    styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    pets: Pet[] = [];
    displayedColumns: string[];
    dataSource!: MatTableDataSource<any>;

    constructor(private petService: PetService, private snackBar: MatSnackBar, private router: Router) {
        this.displayedColumns = columns;
    }

    ngOnInit(): void {
        this.loadPets();
    }

    loadPets() {
        this.pets = this.petService.getPets();
        this.dataSource = new MatTableDataSource(this.pets);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deletePet(id: string) {
        this.petService.deletePet(id);
        this.loadPets();

        this.snackBar.open('Pet removed successfully', '', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }
}
