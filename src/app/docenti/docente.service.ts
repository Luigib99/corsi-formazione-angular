import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DocenteModel } from '../model/docente.model';

@Injectable({
  providedIn: 'root'
})

export class DocenteService {
  private http = inject(HttpClient);
    docente: DocenteModel= {} as DocenteModel;
    docenti: DocenteModel[] = [];
  
    getAllDocenti() {
      return this.http.get<DocenteModel[]>('http://localhost:8080/docente/getAllDocenti');
    }

    deleteDocente(id: number) {
      return this.http.delete<DocenteModel>(`http://localhost:8080/docente/deleteDocente/${id}`);
    }

    createDocente(docente:DocenteModel){
      return this.http.post<DocenteModel>('http://localhost:8080/docente/createDocente', docente);
    }

    updateDocente( id: number, docente:DocenteModel){
      return this.http.put<DocenteModel>(`http://localhost:8080/docente/updateDocente/${id}`, docente);
    }

    getFilteredDocenti(nome?: string, cognome?: string) {
      let params = new HttpParams();
      
      if (nome) params = params.append('nome', nome);
      if (cognome) params = params.append('cognome', cognome);
    
      return this.http.get<DocenteModel[]>('http://localhost:8080/docente/filterDocente', { params });
    }
}