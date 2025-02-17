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

  private docenteService = inject(DocenteService);
    docenti = signal<DocenteModel[]> ([]);
    docenteEliminato: boolean = false;

    selectDocente(idDocenteSelect: number){
      this.idDocente = idDocenteSelect;
      this.docenteSelect = this.docenti().find(docente => docente.id == idDocenteSelect)!;
    }
  
    ngOnInit() {
      this.docenteService.getAllDocenti().subscribe({
        next: (data) => {
          this.docenti.set(data);
        }
      });
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
