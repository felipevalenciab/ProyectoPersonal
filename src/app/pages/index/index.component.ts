import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../../assets/index/style-login.css']
})
export class IndexComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

  loginForm = { email: '', password: '' };

  onSubmit(){}

}
