import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

  selectedModal: number = 0;

  showOutside: boolean = false;

  modalOptions = {
    None: 0,
    Atrium: 1,
    Ostium: 2,
    Vestibulum: 3,
    Tabernae: 4,
    Compluvium: 5,
    Impluvium: 6,
    Tablinum: 7,
    Triclinium: 8,
    Alae: 9,
    Cubiculum: 10,
    Culina: 11,
    Posticum: 12,
    Peristylium: 13,
    Piscina: 14,
    Exedra: 15,
    Fauces: 16
  }

  constructor() { }

  ngOnInit() {
  }

  selectModal(modalChoice: number): void {
    this.selectedModal = modalChoice;
  }

}
