import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'sg-fe';
}
