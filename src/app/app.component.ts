import { Component} from '@angular/core';
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

  irParaoTerco(){
    this._router.navigate(['/rezar'])
  }

  getNomeTipoMisterio(){
    var d = new Date();
    var numDiaDaSemana = d.getDay();//Outputs 1 when it's Segunda.
    switch (numDiaDaSemana) {
      case 0://Domingo
        return "Mistérios Gloriosos"
      case 1://Segunda
        return "Mistérios Gozosos"
      case 2://Terça
        return "Mistérios Dolorosos"
      case 3://Quarta
        return "Mistérios Gloriosos"
      case 4://Quinta
        return "Mistérios Gozosos"
      case 5://Sexta
        return "Mistérios Dolorosos"
      case 6://Sábado
        return " Mistérios Gloriosos"
      default:
        return "Mistérios gozosos"
    }
  }
}
