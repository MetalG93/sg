import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '../http.service';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let mockHttpService;

  beforeEach(async () => {
    mockHttpService = jasmine.createSpyObj(['getRandoms']);
    mockHttpService.getRandoms.and.returnValue([1,2,3,4,5])
    await TestBed.configureTestingModule({
      declarations: [ BoardComponent ],
      providers: [{
        provide: HttpService,
        useValue: mockHttpService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
