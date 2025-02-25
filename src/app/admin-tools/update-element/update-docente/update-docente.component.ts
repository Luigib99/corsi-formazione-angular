import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { DocenteModel } from '../../../model/docente.model';
import { DocenteService } from '../../../docenti/docente.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

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
    private routerSubscription!: Subscription;
    private docenteService = inject(DocenteService);
    docenti = signal<DocenteModel[]> ([]);
    docenteModificato: boolean = false;

    constructor(private router: Router) {}

  ngOnInit() {
    this.getAllDocenti();
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.closeModal();
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  closeModal() {
    let modal = document.getElementById('staticBackdrop');
    if (modal) {
      (modal as any).classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      modal.setAttribute('style', 'display: none');
      document.body.classList.remove('modal-open');
      let backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }
  }
    

    public getAllDocenti() {
      this.docenteService.getAllDocenti().subscribe({
        next: (data) => {
          this.docenti.set(data);
        }
      });
    }

    selectDocente(idDocenteSelect: number){
      this.idDocente = idDocenteSelect;
      this.docenteSelect = this.docenti().find(docente => docente.id == idDocenteSelect)!;
    }

    updateDocente(id: number,form: NgForm){
      const docente: DocenteModel = form.value;
      this.docenteService.updateDocente(id, docente).subscribe({
      })
      this.docenteModificato = true;
        setTimeout(() => {
          this.docenteModificato = false;
        }, 1500);
    }
}
