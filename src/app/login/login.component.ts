import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { HttpService } from '../http.service';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users?: User[];
  selectedUser?: String;
  result?: Boolean;
  incorrectPassword = false;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe((usersFromBackEnd: User[]) => this.users = usersFromBackEnd);
  }

  login(userId: string, password: string): void {
    this.httpService.checkPassword(userId, password).subscribe(result => {
      if(result){
        this.userService.userId = userId;
        this.router.navigateByUrl('/game');
      } else {
        this.incorrectPassword = true;
      }
    });
  }

  logActiveUser(): void {
    console.log(this.selectedUser);
    
  }

}
