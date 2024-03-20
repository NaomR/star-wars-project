import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'star-wars-project';
}
