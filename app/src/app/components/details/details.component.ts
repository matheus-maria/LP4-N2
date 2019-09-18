import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothes } from 'src/app/api/common.models';
import { CommonService } from 'src/app/api/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private api: CommonService, private router: Router, private route: ActivatedRoute) { }

  item: Clothes  

  async ngOnInit() {
    this.route.params      
      .subscribe( async (params) => {
        this.item = await this.api.getItem(params.id)        
    });
  }

}
