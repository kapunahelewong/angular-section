import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Content, fetchOneEntry, type BuilderContent } from '@builder.io/sdk-angular';


@Component({
  selector: 'app-announcement-bar',
  standalone: true,
  imports: [CommonModule, Content],
  templateUrl: './announcement-bar.component.html',
  styleUrl: './announcement-bar.component.css'
})
export class AnnouncementBarComponent {

  apiKey = 'a485348a33484569979d1969a9fc6dda';
  model = 'announcement-bar';
  content: BuilderContent | null = null;

  async ngOnInit() {
    const urlPath = window.location.pathname || '';

    const content = await fetchOneEntry({
      apiKey: this.apiKey,
      model: this.model,
      userAttributes: {
        urlPath,
      },
    });

    if (!content) {
      return;
    }

    this.content = content;
  }
}
