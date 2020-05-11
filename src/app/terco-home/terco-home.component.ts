import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terco-home',
  templateUrl: './terco-home.component.html',
  styleUrls: ['./terco-home.component.css']
})
export class TercoHomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  irParaoTerco(){
    this._router.navigate(['/rezar'])
  }

}
