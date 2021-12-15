import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input()
  boardIndex: string = "-1";

  numbers: Number[] = [];

  @Output()
  cellClickedOnBoard = new EventEmitter<Number[]>()

  constructor(
    private http:HttpService
  ) { }

  ngOnInit(): void {
    for (let i = 1; i <= 49; i++) {
      this.numbers?.push(i);
    }
  }

  getRandom(): void {
    this.http.getRandoms().subscribe(numbers => {
      numbers.forEach(element => {
        this.cellClickedOnBoard.emit([Number.parseInt(this.boardIndex), ]);
      });      
    });
  }

  deleteNumbers(): void {
    this.numbers = [];
  }

  cellClickEventHandler($event: number): void {
    this.cellClickedOnBoard.emit([Number.parseInt(this.boardIndex), $event]);
  }

}
