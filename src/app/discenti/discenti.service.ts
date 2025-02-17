import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DiscenteModel } from '../model/discente.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscentiService {
  private http = inject(HttpClient);
  discente: DiscenteModel= {} as DiscenteModel;
  discenti: DiscenteModel[] = [];

  getAllDiscenti() {
    return this.http.get<DiscenteModel[]>('http://localhost:8080/discente/getAllDiscenti').pipe(tap({
      next: (data) => {
        this.discenti = data;
      }
    }
    ));
  }
}
