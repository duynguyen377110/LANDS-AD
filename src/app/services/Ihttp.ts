import { Observable } from 'rxjs';

export interface Ihttp {
    get(url: string): Observable<any>;

    post(url: String, payload: any): Observable<any>

    push(): void

    delete(url: string, payload: any): Observable<any>
}