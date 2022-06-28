import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  url1 = './assets/i.jpg';
  url2 = './assets/fmf_3975-scaled.jpg';
  url3: string;

  constructor() { 
    this.url3 = '';
  }


  ngOnInit(): void {
  }
  
}
