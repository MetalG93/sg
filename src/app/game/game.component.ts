import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  boards: Map<number, boolean>[] = [];

  ngOnInit(): void {
    for(let i = 0; i < 4; i++){
      this.boards.push(new Map<number, boolean>());
      this.fillBoard(i);      
    }
  }

  fillBoard(index: number): void {
    for(let j = 1; j<=49; j++){
      this.boards[index].set(j, false);
    }
    console.log(this.boards);
  }

  checkBoards(): void{
    window.alert("Under construction...");
  }

  onBoardDeleteHandler($event: number): void {
    this.boards[$event].clear();
    this.fillBoard($event);
  }

  onBoardCellClickedHandler($event: number[]){
    this.boards[$event[0]].set($event[1], !this.boards[$event[0]].get($event[1]))
    console.log(this.boards[$event[0]].get($event[1]));
  }

}
