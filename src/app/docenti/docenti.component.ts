import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../docenti/docente.service';
import { DocenteModel } from '../model/docente.model';

@Component({
  selector: 'app-docenti',
  templateUrl: './docenti.component.html',
  standalone: false,
  styleUrls: ['./docenti.component.css']
})
export class DocentiComponent implements OnInit {
  docenti: DocenteModel[] = [];
  idDocente: number = 0;
  nome: string = '';
  cognome: string = '';
  docenteSelect:DocenteModel = {
    id: 0,
    nome: '',
    cognome: '',
    listaCorsi: []
  };

  constructor(private docenteService: DocenteService) {}

  ngOnInit(): void {
    this.docenteService.getAllDocenti().subscribe((data: DocenteModel[]) => {
      this.docenti = data;
    });
  }

  showInfo(docente: any): void {
    this.docenteSelect = docente;
  }

  search() {
    this.docenteService.getFilteredDocenti(this.nome, this.cognome)
      .subscribe(
        (data: DocenteModel[]) => {
          this.docenti = data;
          console.log('Risultati trovati:', this.docenti);
        },
        (error) => {
          console.error('Errore nella ricerca:', error);
        }
      );
  }
}