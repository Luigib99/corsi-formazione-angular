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

  ngOnInit(): void {
    this.discenteService.getAllDiscenti().subscribe({
      next: (data) => {
        this.discenti = data;
      }
    });
  }
}
