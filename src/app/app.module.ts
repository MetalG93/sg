import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './user-service.service';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
