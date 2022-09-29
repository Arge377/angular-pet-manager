import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalKind } from '../interfaces/animal-kind';

@Injectable({
    providedIn: 'root',
})
export class AnimalKindService {
    constructor(private http: HttpClient) {}

    getAnimalsKind(): Observable<AnimalKind[]> {
        return this.http.get<AnimalKind[]>('./assets/data/animal-kind.json');
    }
}
