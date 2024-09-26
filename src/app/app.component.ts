import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnnouncementBarComponent } from './announcement-bar/announcement-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnnouncementBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'section';
}
