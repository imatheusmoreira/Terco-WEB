import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-terco-details',
  templateUrl: './terco-details.component.html',
  styleUrls: ['./terco-details.component.css']
})
export class TercoDetailsComponent implements OnInit {

  @Input('pMomento') public momento;
  @Input('pOracaoContador') public oracaoContador;
  @Input('pOracaoTotal') public oracaoTotal;
  @Input('pMisterio') public misterio;

  constructor() { }

  ngOnInit(): void {
  }

}
