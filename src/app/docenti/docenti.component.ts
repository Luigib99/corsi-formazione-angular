import { Component, inject, OnInit, output } from '@angular/core';
import { DocenteService } from './docente.service';
import { Subscription } from 'rxjs';
import { NgFor} from '@angular/common';
import { DocenteModel } from '../model/docente.model';
@Component({
  selector: 'app-docenti',
  templateUrl: './docenti.component.html',
  imports: [NgFor],
  styleUrls: ['./docenti.component.css']
})
export class DocentiComponent implements OnInit {
  private discenteService = inject(DocenteService);
  docenti :DocenteModel[] = [];

  ngOnInit(): void {
    this.discenteService.getAllDocenti().subscribe({
      next: (data) => {
        this.docenti = data;
      }
    });
  }
}