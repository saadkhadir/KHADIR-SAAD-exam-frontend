import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditPersonnelDTO } from '../app/credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private apiUrl = 'http://localhost:8080/api/credits/personnels'; // À adapter

  constructor(private http: HttpClient) {}

  getAll(): Observable<CreditPersonnelDTO[]> {
    return this.http.get<CreditPersonnelDTO[]>(this.apiUrl);
  }

  create(credit: CreditPersonnelDTO): Observable<CreditPersonnelDTO> {
    return this.http.post<CreditPersonnelDTO>(this.apiUrl, credit);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

export class AuthService {
  logout() {

  }

  login(username: any, pwd: any) {

  }
}
