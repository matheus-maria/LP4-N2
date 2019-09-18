import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/api/common.service';
import { Clothes } from 'src/app/api/common.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private api: CommonService, private router: Router) { }

  dataList: Clothes[]
  displayedColumns: string[] = ['code', 'features', 'entryAt', 'price', 'actions'];  

  async ngOnInit() {
    this.dataList = await this.api.getData()    
  }

  remove = (id: number) => {
    console.log("Id",id)
  }

  edit = (id: number) => {
    this.router.navigate(['/details', id])
  }

}
