import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  d:any;
  num=1;
  show=false;
  constructor(private s:ApiserviceService){

  }
getData(){
  this.s.getData(this.num).subscribe((response)=>{
    console.log(response);
    this.d=response;
    this.show=true;
  })
}
}
