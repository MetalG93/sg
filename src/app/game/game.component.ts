import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  boards: Map<number, Map<number, boolean>> = new Map<number, Map<number, boolean>>();

  ngOnInit(): void {
    for(let i = 1; i <= 4; i++){
      this.boards.set(i, new Map<number, boolean>());
      this.fillBoard(i);      
    }
  }

  fillBoard(index: number): void {
    for(let j = 1; j<=49; j++){
      this.boards.get(index)?.set(j, false);
    }
  }

  checkBoards(): void{
    window.alert("Under construction...");
  }

  onBoardDeleteHandler($event: number): void {
    this.boards.get($event)?.clear();
    this.fillBoard($event);
    console.log(this.boards.get($event));
  }

  onBoardCellClickedHandler($event: number[]){
    this.boards.get($event[0])?.set($event[1], !this.boards.get($event[0])?.get($event[1]));
  }

}
