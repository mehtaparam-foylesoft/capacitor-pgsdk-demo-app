/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CashFreeService {
    constructor(private http: HttpClient) { }

    public httpCall(
        serviceUrl: string,
        bodyJson?: any,
    ): Observable<any> {
        const headersArr = new HttpHeaders();
        headersArr.append('x-client-id', environment.cashFreeClientID);
        headersArr.append('x-client-secret', environment.cashFreeAppSecret);
        if (!bodyJson) {
            bodyJson = {};
        }
        return this.http.post(serviceUrl, bodyJson, { headers: headersArr });
    }


}
