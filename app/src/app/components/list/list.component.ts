import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/api/common.service';
import { Clothes } from 'src/app/api/common.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private api: CommonService) { }

  dataList: Clothes[]

  async ngOnInit() {
    this.dataList = await this.api.getData()
  }

}
