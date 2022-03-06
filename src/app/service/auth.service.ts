import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Character } from '../core/model/character';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient) { }

  public getAllCharacterByHouse(method: string, house: string): Observable<Character[]> {
    const endpoint = `${environment.baseUrl}${method}${house}`;
    return this.client.get<Character[]>(endpoint);
  }
}

