import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router){ }

  title = 'Estoque de Roupas';
  addButton: boolean = true

  add = () => {
    this.router.navigate(['/details', -1])
  }
}
