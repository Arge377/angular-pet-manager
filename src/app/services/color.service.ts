import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../interfaces/color';

@Injectable({
    providedIn: 'root',
})
export class ColorService {
    constructor(private http: HttpClient) {}

    getColors(): Observable<Color[]> {
        return this.http.get<Color[]>('./assets/data/color.json');
    }
}
