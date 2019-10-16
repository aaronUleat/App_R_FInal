import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';
import {User} from './user.model';

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new Subject<User>();
    constructor(private http: HttpClient) {}
    signup( email: string, password: string ) {
        // tslint:disable-next-line:max-line-length
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDlN76Dti-IzjCQiKGFvf28V-L4WaNuWA', {
            email,
            password,
            returnSecureToken: true
        }).pipe( catchError( this.handleError ), tap( resData => {
            const expirationDate = new Date( new Date().getTime() + +resData.expiresIn * 1000);
            const user = new User(
                resData.email,
                resData.localId,
                resData.idToken,
                expirationDate
            );
            this.user.next(user);
        }) );
    }

    login( email: string, password: string ) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDlN76Dti-IzjCQiKGFvf28V-L4WaNuWA', {
                email,
                password,
                returnSecureToken: true
            }
        ).pipe( catchError( this.handleError ) );
    }

    private handleAuthentication( email: string ) {

    }

    private handleError( errorRes: HttpErrorResponse ) {
        let errorMessage = 'Unknow Error';
        if (!errorRes.error || !errorRes.error.error ) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'Este correo ya existe!!';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Este correo no existe.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'El password ingresado no es correcto';
                break;
        }
        return throwError(errorMessage);
    }
}
