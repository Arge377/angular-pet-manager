import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
})
export class SharedModule {}
