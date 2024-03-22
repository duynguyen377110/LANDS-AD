import { Observable } from 'rxjs';

export interface Ihttp {
    get(): void

    post(url: String, payload: any): Observable<any>

    push(): void

    delete(): void
}