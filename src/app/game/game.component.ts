import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  indexes: Number[] = [];

  ngOnInit(): void {
    for(let i = 1; i <= 4; i++){
      this.indexes.push(i);
    }
  }

  checkBoards(): void{
    window.alert("Under construction...");
  }

  onBoardCellClickedHandler($event: Number[]){
    window.alert($event);
  }

}
