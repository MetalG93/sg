import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let board: Map<number, boolean> = new Map<number, boolean>();
    board.set(1, false);
    board.set(2, false);
    board.set(3, false);
    board.set(4, false);
    board.set(5, false);
    board.set(6, false);
    let boards: Map<number, Map<number, boolean>> = new Map<number, Map<number, boolean>>();
    boards.set(1, board);
    component.boards=boards;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sould check board texts', () => {
    component.checkBoards();
    expect(component.boardTexts.length).toBe(1);
  });
});
