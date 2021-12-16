import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnChanges {

  @Input()
  boardIndex: number = -1;

  @Input()
  numbers: Map<number, boolean> = new Map<number, boolean>();

  @Output()
  cellClickedOnBoard = new EventEmitter<number[]>()

  @Output()
  deleteBoard = new EventEmitter<number>();

  constructor(
    private http:HttpService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  getRandom(): void {
    this.deleteNumbers();
    this.http.getRandoms().subscribe(numbers => {
      numbers.forEach(element => {
        this.cellClickedOnBoard.emit([this.boardIndex, element]);
      });      
    });
  }

  deleteNumbers(): void {
    this.deleteBoard.emit(this.boardIndex);
  }

  cellClickEventHandler($event: number): void {
    this.cellClickedOnBoard.emit([this.boardIndex, $event]);
  }

}
