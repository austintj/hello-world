import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './hello-world/hello-world.component.html',
  styleUrls: ['./hello-world/hello-world.component.scss']
})
export class AppComponent {
  title = 'hello-world';
}
