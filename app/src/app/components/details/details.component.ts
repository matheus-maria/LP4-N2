import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothes } from 'src/app/api/common.models';
import { CommonService } from 'src/app/api/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private api: CommonService, private router: Router, 
    private route: ActivatedRoute, private fb: FormBuilder) { }

  item: Clothes 

  public form: FormGroup

  async ngOnInit() {
    this.route.params      
      .subscribe( async (params) => {
        if(params.id != -1)
          this.item = await this.api.getItem(params.id)        
    });
    this.createForms()

  }

  createForms = () => {
    this.form = this.fb.group({
      Code : [this.item.code, Validators.required],
      Color : [this.item.color, Validators.required],
      EntryAt : [this.item.entryAt, Validators.required],
      SaleValue : [this.item.saleValue, Validators.required],
      PurchaseValue : [this.item.purchaseValue, Validators.required],
      Type : [this.item.type, Validators.required],
      Brand : [this.item.brand, Validators.required],
      Features : [this.item.features, Validators.required],
      Size : [this.item.size, Validators.required],
      Price : [this.item.price, Validators.required]
    })

    this.form.valueChanges.subscribe((values: Clothes) => {
      this.item.code = values.code
      this.item.color = values.color
      this.item.entryAt = values.entryAt
      this.item.saleValue = values.saleValue
      this.item.purchaseValue = values.purchaseValue
      this.item.type = values.type
      this.item.brand = values.brand
      this.item.features = values.features
      this.item.size = values.size
      this.item.price = values.price
    })
  }

}
