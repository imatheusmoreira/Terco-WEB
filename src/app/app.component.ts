import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public titulo = "TerçoWEB";
  public nomeTipoMisterio = this.getNomeTipoMisterio();

  irParaoTerco() {
    this._router.navigate(['/rezar'])
  }

  getNomeTipoMisterio() : string {
    var d = new Date();
    var numDiaDaSemana = d.getDay();
    let arrayMisterios = ["Mistérios Gloriosos", "Mistérios Gozosos",
    "Mistérios Dolorosos", "Mistérios Gloriosos",
    "Mistérios Luminosos", "Mistérios Dolorosos",
    "Mistérios Gloriosos", "Mistérios Gozosos"];

    return  arrayMisterios[numDiaDaSemana];
  }
}
