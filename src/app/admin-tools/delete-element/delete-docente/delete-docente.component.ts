import { Component, ElementRef, inject, signal, Signal, ViewChild } from '@angular/core';
import { DocenteService } from '../../../docenti/docente.service';
import { Subscription } from 'rxjs';
import { DocenteModel } from '../../../model/docente.model';

@Component({
  selector: 'app-delete-docente',
  standalone: false,
  
  templateUrl: './delete-docente.component.html',
  styleUrl: './delete-docente.component.css'
})
export class DeleteDocenteComponent {
  
  @ViewChild('deleteDialogModal') dialog!: ElementRef<HTMLDialogElement>;
  idDocente: number = 0;
  docenteSelect:DocenteModel = {} as DocenteModel;
  filteredDocenti: DocenteModel[] = [];
  searchTermNome: string = '';
  searchTermCognome: string = '';
  private docenteService = inject(DocenteService);
  docenteEliminato: boolean = false;
  listaDocenti: DocenteModel[] = [];

  selectDocente(idDocenteSelect: number){
    this.idDocente = idDocenteSelect;
    this.docenteSelect = this.listaDocenti.find(docente => docente.id == idDocenteSelect)!;
  }

  ngOnInit(): void {
    this.docenteService.getAllDocenti().subscribe((data: DocenteModel[]) => {
      this.listaDocenti = data;
      this.filteredDocenti = data;
    });
  }

  filterNomeDocenti(): void {
    this.filteredDocenti = this.listaDocenti.filter(docente =>
      docente.nome.toLowerCase().includes(this.searchTermNome.toLowerCase())
    );
  }

  filterCognomeDocenti(): void {
    this.filteredDocenti = this.listaDocenti.filter(docente =>
      docente.cognome.toLowerCase().includes(this.searchTermCognome.toLowerCase())
    );
  }
  
  deleteDocente(id: number){
      this.docenteService.deleteDocente(id).subscribe({
        next: (data) => {console.log('Success:', data)
        this.ngOnInit();
        },
      })
      this.docenteEliminato = true;
        setTimeout(() => {
          this.docenteEliminato = false;
        }, 3000);
    ;
  }
}
