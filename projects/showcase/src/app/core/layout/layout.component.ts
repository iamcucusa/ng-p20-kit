import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@core/layout/header.component';
import { FooterComponent } from '@core/layout/footer.component';

@Component({
  selector: 'kit-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  styleUrls: ['./layout.component.scss'],
  template: `
    <div class="pg-layout">
      <header class="pg-layout-header">
        <kit-header
          [userRole]="'ADMIN'"
          [userEmail]="'john.doe@pegasus.com'"
          [givenName]="'John'"
          [userLastName]="'Doe'">
        </kit-header>
      </header>

      <main class="pg-layout-main">
        <div class="pg-layout-content" role="main">
          <div class="pg-layout-main-content">
            <router-outlet></router-outlet>
          </div>
          <footer class="pg-layout-footer">
            <kit-footer></kit-footer>
          </footer>
        </div>
      </main>
    </div>
  `
})
export class LayoutComponent {
  constructor() {}
}
