import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'kit-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App {
  protected readonly title = signal('Pegasus Showcase');
}
