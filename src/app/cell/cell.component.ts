import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {

  @Input()
  cellNumber: number = -1;
 
  @Input()
  selected = false;

  @Output()
  clickEvent = new EventEmitter<number>();

  changeSelected(): void {
    this.clickEvent.emit(this.cellNumber);
  }
}
