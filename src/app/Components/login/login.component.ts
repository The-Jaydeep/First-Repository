import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private rout:Router){

  }
login(form:any){
if(form.value.username==='Jay' && form.value.password ==='1245'){
this.rout.navigate(['/home']);
}
else{
  alert("Invalid!!!");
this.rout.navigate(['/login']);

}
}
}
