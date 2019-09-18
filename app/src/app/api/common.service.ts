import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clothes } from './common.models';

@Injectable({
   providedIn: 'root'
})
export class CommonService {

   constructor(private http: HttpClient) { }  

   public Data: Clothes = new Clothes();   

   public async getData(): Promise<Clothes[]> {
      try {
         let url = `${environment.HostAPI}${environment.PathAPI}/clothes`
         return await this.http.get<Clothes[]>(url).toPromise();
      }
      catch { return null; }
   }

   public async getItem(id: number): Promise<Clothes> {
      try {
         let url = `${environment.HostAPI}${environment.PathAPI}/clothes/${id}`
         return await this.http.get<Clothes>(url).toPromise();
      }
      catch { return null; }
   }

}
