import { Component, inject } from '@angular/core';
import { DiscentiService } from './discenti.service';
import { DiscenteModel } from '../model/discente.model';

@Component({
  selector: 'app-discenti',
  standalone: false,
  
  templateUrl: './discenti.component.html',
  styleUrl: './discenti.component.css'
})
export class DiscentiComponent {
  private discenteService = inject(DiscentiService);
  discenti :DiscenteModel[] = [];
  nome: string = '';
  cognome: string = '';
  discenteSelect:DiscenteModel = {
    id: 0,
    nome: '',
    cognome: '',
    matricola: '',
    dataNascita: new Date(),
    listaCorsi: []
  };

  ngOnInit(): void {
    this.discenteService.getAllDiscenti().subscribe({
      next: (data) => {
        this.discenti = data;
      }
    });
  }

  showInfo(discente: DiscenteModel): void {
    this.discenteSelect = discente;
    console.log(this.discenteSelect.listaCorsi);
  }

}
