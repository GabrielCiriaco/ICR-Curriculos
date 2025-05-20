import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  constructor(
    private router: Router,
  ) {} 

  redirectToUserLogin(){
    this.router.navigate(['/user-login']);
  }
}
