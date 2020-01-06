import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getOrCreateClient() {
    return this.httpClient.get('http://localhost:8080/client').pipe();
  }

}
