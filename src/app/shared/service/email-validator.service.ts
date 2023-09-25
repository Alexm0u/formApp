import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {
    
    validate(control: AbstractControl<any, any>): | Observable<ValidationErrors | null> {
        const email = control.value;

        return of({
            emailTaken: true
        }).pipe(
            delay(2000)
        );
    }
    
     
}