import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'pg-header',
  standalone: true,
  imports: [CommonModule, RouterModule, AvatarModule, RippleModule, BadgeModule],
  template: `
    <div class="pg-header-container">
      <a
        pRipple
        class="pg-user-profile"
      >
        <p-avatar
          label="{{ email.charAt(0).toUpperCase() }}"
          class="pg-user-profile__avatar"
          size="large"
          shape="circle"
        ></p-avatar>
        <div class="pg-user-profile__info">
          <span class="pg-user-profile__name"
            >{{ name | titlecase }} {{ lastName | titlecase }}</span
          >
          <p class="pg-user-profile__role">{{ role }}</p>
        </div>
      </a>

      <div class="pg-navigation">
        <ul class="pg-navigation__list">
          <li class="pg-navigation__item">
            <a
              [routerLink]="['/dashboard']"
              tabindex="0"
              [routerLinkActive]="'pg-navigation__link--active'"
              [routerLinkActiveOptions]="{ exact: false }"
              pRipple
              class="pg-navigation__link"
            >
              <i class="pi pi-file"></i>
              <span>Trials</span>
            </a>
          </li>
          <li class="pg-navigation__item">
            <a
              [routerLink]="['/report']"
              tabindex="1"
              [routerLinkActive]="'pg-navigation__link--active'"
              [routerLinkActiveOptions]="{ exact: false }"
              pRipple
              class="pg-navigation__link"
            >
              <i class="pi pi-file"></i>
              <span>Reports</span>
            </a>
          </li>
          <li class="pg-navigation__item">
            <a
              pRipple
              [routerLink]="['/help']"
              tabindex="2"
              [routerLinkActive]="'pg-navigation__link--active'"
              [routerLinkActiveOptions]="{ exact: false }"
              class="pg-navigation__link"
            >
              <i class="pi pi-question-circle"></i>
              <span>User Guide</span>
            </a>
          </li>
        </ul>
      </div>
      
      <div class="pg-sign-out-section">
        <a
          pRipple
          (click)="signOut()"
          class="pg-sign-out-link"
        >
          <i class="pi pi-sign-out"></i>
          <span>Sign Out</span>
        </a>
      </div>

    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Dummy data for styling validation
  role: string = 'SUPER ADMIN';
  email: string = 'john.doe@pegasus.com';
  name: string = 'John';
  lastName: string = 'Doe';

  constructor() {}

  @Input() set userRole(role: string | undefined | null) {
    this.role = role || 'SUPER ADMIN';
  }

  @Input() set userEmail(email: string | undefined | null) {
    this.email = email || 'john.doe@pegasus.com';
  }

  @Input() set givenName(name: string | undefined | null) {
    const names = name?.split(' ');
    if (name?.includes('#lc')) {
      this.name = names && names?.length > 1 ? names[1] : name || 'John';
    } else {
      this.name = names && names?.length > 1 ? names[0] : name || 'John';
    }
  }

  @Input() set userLastName(lastName: string | undefined | null) {
    const lastNames = lastName?.split(' ');
    if (lastName?.includes('#Lc')) {
      this.lastName = lastNames && lastNames?.length > 1 ? lastNames[1] : lastName || 'Doe';
    } else {
      this.lastName = lastNames && lastNames?.length > 1 ? lastNames[0] : lastName || 'Doe';
    }
  }

  ngOnInit(): void {
    console.log('Header component loaded with role:', this.role);
  }

  signOut() {
    // Dummy sign out - just log for validation
    console.log('Sign out clicked - dummy implementation');
  }
}
