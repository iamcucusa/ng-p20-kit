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
    <div class="header-container">
      <a
        pRipple
        class="user-profile"
      >
        <p-avatar
          label="{{ email.charAt(0).toUpperCase() }}"
          class="user-profile__avatar"
          size="large"
          shape="circle"
        ></p-avatar>
        <div class="user-profile__info">
          <span class="user-profile__name"
            >{{ name | titlecase }} {{ lastName | titlecase }}</span
          >
          <p class="user-profile__role">{{ role }}</p>
        </div>
      </a>

      <div class="navigation">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a
              [routerLink]="['/dashboard']"
              tabindex="0"
              [routerLinkActive]="'navigation__link--active'"
              [routerLinkActiveOptions]="{ exact: false }"
              pRipple
              class="navigation__link"
            >
              <i class="pi pi-file mr-2 text-lg"></i>
              <span class="text-lg font-medium">Trials</span>
            </a>
          </li>
          <li class="navigation__item">
            <a
              [routerLink]="['/report']"
              tabindex="1"
              [routerLinkActive]="'navigation__link--active'"
              [routerLinkActiveOptions]="{ exact: false }"
              pRipple
              class="navigation__link"
            >
              <i class="pi pi-file mr-2 text-lg"></i>
              <span class="text-lg font-medium">Reports</span>
            </a>
          </li>
          <li class="navigation__item">
            <a
              pRipple
              [routerLink]="['/help']"
              tabindex="2"
              [routerLinkActive]="'navigation__link--active'"
              [routerLinkActiveOptions]="{ exact: false }"
              class="navigation__link"
            >
              <i class="pi pi-question-circle text-lg mr-2"></i>
              <span class="text-lg font-medium">User Guide</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="mobile-menu">
        <a
          pRipple
          class="mobile-menu__toggle"
        >
          <i class="pi pi-bars header-icon--large"></i>
        </a>
        <div class="mobile-menu__dropdown">
          <ul class="mobile-menu__list">
            <li class="mobile-menu__item">
              <a
                pRipple
                (click)="signOut()"
                class="mobile-menu__link"
              >
                <i class="pi pi-sign-out header-icon--medium mr-2 lg:mr-0"></i>
                <span class="block lg:hidden font-medium">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
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
