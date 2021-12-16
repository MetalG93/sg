import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnChanges {

  @Input()
  cellNumber: number = -1;
 
  @Input()
  selected = false;

  @Output()
  clickEvent = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
      this.selected=changes['selected'].currentValue;
  }

  changeSelected(): void {
    this.clickEvent.emit(this.cellNumber);
  }
}
