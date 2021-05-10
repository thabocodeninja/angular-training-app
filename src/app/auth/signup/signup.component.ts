import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm){
    console.log(form);
    }
 // tslint:disable-next-line:typedef
 ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges() 
 }

}