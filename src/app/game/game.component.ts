import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  private noOfBoards = 4;

  boards: Map<number, Map<number, boolean>> = new Map<number, Map<number, boolean>>();
  boardTexts: string[] = [];

  ngOnInit(): void {
    for(let i = 1; i <= this.noOfBoards; i++){
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
    this.boardTexts = [];

    this.boards.forEach((board, key) => this.boardTexts.push(this.checkBoard(key, board)));
  }

  checkBoard(boardNumber: number, board: Map<number, boolean>): string{

    let numbers: number[] = [];
    board.forEach((selected, number) => {
      if(selected){
        numbers.push(number);
      }
    });

    if(numbers.length == 6){
      return this.boardText(boardNumber) + numbers.toString();
    }

    if(numbers.length == 0){
      return this.boardText(boardNumber) + "Empty"
    }

    if(numbers.length < 6){
      return this.boardText(boardNumber) + "Error: x marks are missing";
    } else {
      return this.boardText(boardNumber) + "Error: Please remove x mark";
    }
  }

  boardText(boardNumber: number): string{
    return "Board " + boardNumber + ": ";
  }

  onBoardDeleteHandler($event: number): void {
    this.fillBoard($event);
    this.checkBoards();
  }

  onBoardCellClickedHandler($event: number[]){
    this.boards.get($event[0])?.set($event[1], !this.boards.get($event[0])?.get($event[1]));
    this.checkBoards();
  }
}
