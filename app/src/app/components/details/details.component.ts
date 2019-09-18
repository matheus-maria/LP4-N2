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

  public form: FormGroup

  id: number = -1
  types  = ['Vestido','Saia','Conjunto','Blusa','Calça']
  brands = ['Polo','Tommy','Forever','Levis']

  async ngOnInit() {
    this.route.params      
      .subscribe( async (params) => {
        if(params.id != -1){
          this.id = params.id
          this.api.Data = await this.api.getItem(params.id)
        }
          
        this.createForms()
        
    });
  }

  createForms = () => {
    this.form = this.fb.group({
      code : [this.api.Data.code, Validators.required],
      color : [this.api.Data.color, Validators.required],
      entryAt : [this.api.Data.entryAt, Validators.required],
      saleValue : [this.api.Data.saleValue, Validators.required],
      purchaseValue : [this.api.Data.purchaseValue, Validators.required],
      type : [this.api.Data.type, Validators.required],
      brand : [this.api.Data.brand, Validators.required],
      features : [this.api.Data.features, Validators.required],
      size : [this.api.Data.size, Validators.required],
      price : [this.api.Data.price, Validators.required]
    })

    this.form.valueChanges.subscribe(values => {
      this.api.Data.code = values.code
      this.api.Data.color = values.color
      this.api.Data.entryAt = values.entryAt
      this.api.Data.saleValue = values.saleValue
      this.api.Data.purchaseValue = values.purchaseValue
      this.api.Data.type = values.type
      this.api.Data.brand = values.brand
      this.api.Data.features = values.features
      this.api.Data.size = values.size
      this.api.Data.price = values.price
    })
  }

  onCancelClick = () => {
    this.form.reset()
    this.router.navigate(['/'])
  }

  onConfirmClick = async () => {
    await this.api.save(this.id)
    this.form.reset()
    this.router.navigate(['/'])
  }

}
