import { Component, OnInit } from '@angular/core';

import { Conferencia } from '../conferencia';
import { ConferenciaService } from '../conferencia.service';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class ConferenciaListComponent implements OnInit {

  conferencias: Array<Conferencia> = [];
  selected: Boolean = false;
  selectedConferencia!: Conferencia;

  constructor(private ConferenciaService: ConferenciaService) { }

  ngOnInit() {
    this.getConferencias();
  }

  getConferencias(): void {
    this.ConferenciaService.getConferencias().subscribe(conferencias => this.conferencias = conferencias);
  }

  onSelect(conferencia: Conferencia): void {
    this.selected = true;
    this.selectedConferencia = conferencia;
  }

}
