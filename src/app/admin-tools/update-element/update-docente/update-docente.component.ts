import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { DocenteModel } from '../../../model/docente.model';
import { DocenteService } from '../../../docenti/docente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-docente',
  standalone: false,
  
  templateUrl: './update-docente.component.html',
  styleUrl: './update-docente.component.css'
})
export class UpdateDocenteComponent {
  @ViewChild('deleteDialogModal') dialog!: ElementRef<HTMLDialogElement>;
    idDocente: number = 0;
    docenteSelect:DocenteModel = {} as DocenteModel;
  
    private docenteService = inject(DocenteService);
    docenti = signal<DocenteModel[]> ([]);
    docenteModificato: boolean = false;

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
  
    updateDocente(id: number,form: NgForm){
      const docente: DocenteModel = form.value;
      this.docenteService.updateDocente(id, docente).subscribe({
      })
      this.docenteModificato = true;
        setTimeout(() => {
          this.docenteModificato = false;
        }, 3000);
    }
}
