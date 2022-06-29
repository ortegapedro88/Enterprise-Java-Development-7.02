import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User;
  users: User[] = [];

  @ViewChild('form')
  form! : NgForm;

  constructor() {
    this.user = new User('', '', '', '', '');
  
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.users.push(this.user);
    console.log(this.users);
    //console.log(this.user);
   this.form.reset();

  }

}


