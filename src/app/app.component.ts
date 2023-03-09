import { Component, OnInit } from '@angular/core';
import { characters } from './data/characters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onePiece';
  
  cards = characters;
  constructor(){

  }

  ngOnInit(): void {
    
  }
}
