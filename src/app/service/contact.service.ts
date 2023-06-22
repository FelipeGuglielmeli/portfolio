import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private readonly apiUrl = environment.apiUrl

constructor(private readonly http: HttpClient) { }

// submitContact(data: any) {
//   return this.http.post(this.apiUrl, data)
// }

submitContact(data: any) {
  return this.http.get(this.apiUrl)
}

}
