import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpService } from '../http.service';
import { User } from 'src/models/user';

import { LoginComponent } from './login.component';
import { Observable } from 'rxjs';
import { MockHttpService } from '../MockHttpService';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockHttpService;
  let httpServiceValues = new MockHttpService();

  beforeEach(async () => {
    mockHttpService = jasmine.createSpyObj(['getUsers', 'checkPassword']);
    mockHttpService.getUsers.and.returnValue(httpServiceValues.getUsers());
    mockHttpService.checkPassword.and.returnValue(httpServiceValues.checkPassword());
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [{
        provide: HttpService,
        useValue: mockHttpService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users', () =>{
    expect(component.users?.length).toBeGreaterThan(0);
  });
});
