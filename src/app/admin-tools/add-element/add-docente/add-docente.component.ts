import { Component } from '@angular/core';
import { DocenteModel } from '../../../model/docente.model';
import { DocenteService } from '../../../docenti/docente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-docente',
  standalone: false,
  templateUrl: './add-docente.component.html',
  styleUrl: './add-docente.component.css'
})
export class AddDocenteComponent {
  docenti: DocenteModel[] = [];
  dataLoaded = false;
  docenteForm: any;
  docenteSalvato: boolean = false;

  constructor(private docenteService: DocenteService) { }

  addDocente(form: NgForm){
    const docente: DocenteModel = form.value;
    this.docenteService.createDocente(docente).subscribe(newDocente => {
      if (newDocente) {
        this.docenti.push(newDocente);
        form.resetForm();
        this.docenteSalvato = true;
        setTimeout(() => {
          this.docenteSalvato = false;
        }, 3000);
      }
    });
  }
}
