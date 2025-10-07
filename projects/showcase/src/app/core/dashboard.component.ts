import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { SpacingTestComponent } from './spacing-test.component';

interface DashboardItem {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'active' | 'inactive' | 'pending';
  priority: 'high' | 'medium' | 'low';
  created: Date;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ListboxModule,
    ButtonModule,
    BadgeModule,
    DividerModule,
    TagModule,
    SpacingTestComponent
  ],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1 class="dashboard-title">
          <i class="pi pi-home" style="margin-right: 0.5rem;"></i>
          Dashboard
        </h1>
        <p class="dashboard-subtitle">Welcome to the Pegasus Showcase - PrimeNG 20 with Saga-Blue Theme</p>
      </div>

      <div class="dashboard-grid">
        <!-- Statistics Cards -->
        <div class="dashboard-cards">
          <p-card header="Total Items" class="stat-card">
            <div class="stat-content">
              <div class="stat-number">{{ totalItems }}</div>
              <div class="stat-label">Active Items</div>
            </div>
            <ng-template pTemplate="footer">
              <p-button 
                label="View All" 
                icon="pi pi-eye" 
                [outlined]="true"
                size="small">
              </p-button>
            </ng-template>
          </p-card>

          <p-card header="Categories" class="stat-card">
            <div class="stat-content">
              <div class="stat-number">{{ categories.length }}</div>
              <div class="stat-label">Available Categories</div>
            </div>
            <ng-template pTemplate="footer">
              <p-button 
                label="Manage" 
                icon="pi pi-cog" 
                [outlined]="true"
                size="small">
              </p-button>
            </ng-template>
          </p-card>

          <p-card header="High Priority" class="stat-card">
            <div class="stat-content">
              <div class="stat-number">{{ highPriorityCount }}</div>
              <div class="stat-label">Urgent Items</div>
            </div>
            <ng-template pTemplate="footer">
              <p-button 
                label="Review" 
                icon="pi pi-exclamation-triangle" 
                [outlined]="true"
                size="small">
              </p-button>
            </ng-template>
          </p-card>
        </div>

        <!-- Items List -->
        <div class="dashboard-content">
          <p-card header="Recent Items" class="list-card">
            <div class="list-header">
              <p-button 
                label="Add Item" 
                icon="pi pi-plus" 
                size="small"
                (onClick)="addItem()">
              </p-button>
              <p-button 
                label="Refresh" 
                icon="pi pi-refresh" 
                [outlined]="true"
                size="small"
                (onClick)="refreshItems()">
              </p-button>
            </div>

            <p-divider></p-divider>

            <p-listbox 
              [options]="dashboardItems" 
              [style]="{'width': '100%', 'height': '400px'}"
              optionLabel="title"
              [multiple]="false"
              [showToggleAll]="false">
              
              <ng-template let-item pTemplate="item">
                <div class="list-item">
                  <div class="item-header">
                    <div class="item-title">{{ item.title }}</div>
                    <div class="item-actions">
                      <p-tag 
                        [value]="item.status" 
                        [severity]="getStatusSeverity(item.status)">
                      </p-tag>
                      <p-tag 
                        [value]="item.priority" 
                        [severity]="getPrioritySeverity(item.priority)">
                      </p-tag>
                    </div>
                  </div>
                  <div class="item-description">{{ item.description }}</div>
                  <div class="item-footer">
                    <span class="item-category">
                      <i class="pi pi-tag" style="margin-right: 0.25rem;"></i>
                      {{ item.category }}
                    </span>
                    <span class="item-date">
                      <i class="pi pi-calendar" style="margin-right: 0.25rem;"></i>
                      {{ item.created | date:'short' }}
                    </span>
                  </div>
                </div>
              </ng-template>
            </p-listbox>
          </p-card>
        </div>
      </div>
      
      <!-- Spacing Test Section -->
      <div class="spacing-test-section">
        <app-spacing-test></app-spacing-test>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .dashboard-header {
      text-align: center;
      padding: 1rem 0;
    }

    .dashboard-title {
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--p-text-color);
      margin: 0 0 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dashboard-subtitle {
      font-size: 1.1rem;
      color: var(--p-text-color-secondary);
      margin: 0;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 2rem;
    }

    .dashboard-cards {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .stat-card {
      height: fit-content;
    }

    .stat-content {
      text-align: center;
      padding: 1rem 0;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--p-primary-color);
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 0.9rem;
      color: var(--p-text-color-secondary);
    }

    .list-card {
      height: fit-content;
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .list-item {
      padding: 1rem;
      border-bottom: 1px solid var(--p-surface-border);
      transition: background-color 0.2s;
    }

    .list-item:hover {
      background-color: var(--p-surface-hover);
    }

    .list-item:last-child {
      border-bottom: none;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.5rem;
    }

    .item-title {
      font-weight: 600;
      color: var(--p-text-color);
      font-size: 1rem;
    }

    .item-actions {
      display: flex;
      gap: 0.5rem;
    }

    .item-description {
      color: var(--p-text-color-secondary);
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
      line-height: 1.4;
    }

    .item-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      color: var(--p-text-color-secondary);
    }

    .item-category,
    .item-date {
      display: flex;
      align-items: center;
    }

    .spacing-test-section {
      margin-top: 3rem;
      padding: 2rem;
      background: var(--p-surface-card);
      border-radius: 8px;
      border: 1px solid var(--p-surface-border);
    }

    @media (max-width: 768px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
      
      .dashboard-title {
        font-size: 2rem;
      }
      
      .list-header {
        flex-direction: column;
        gap: 0.5rem;
        align-items: stretch;
      }
    }
  `]
})
export class DashboardComponent {
  dashboardItems: DashboardItem[] = [
    {
      id: 1,
      title: 'PrimeNG 20 Migration',
      description: 'Complete migration from PrimeNG 17 to PrimeNG 20 with token-based theming',
      category: 'Development',
      status: 'active',
      priority: 'high',
      created: new Date('2024-01-15')
    },
    {
      id: 2,
      title: 'Saga-Blue Theme Recreation',
      description: 'Recreate the original saga-blue theme using PrimeNG 20 token system',
      category: 'Design',
      status: 'active',
      priority: 'high',
      created: new Date('2024-01-10')
    },
    {
      id: 3,
      title: 'Component Library Setup',
      description: 'Set up comprehensive component library with Storybook integration',
      category: 'Development',
      status: 'pending',
      priority: 'medium',
      created: new Date('2024-01-08')
    },
    {
      id: 4,
      title: 'Accessibility Audit',
      description: 'Ensure all components meet WCAG 2.1 AA accessibility standards',
      category: 'Quality Assurance',
      status: 'inactive',
      priority: 'medium',
      created: new Date('2024-01-05')
    },
    {
      id: 5,
      title: 'Documentation Update',
      description: 'Update all documentation to reflect new PrimeNG 20 architecture',
      category: 'Documentation',
      status: 'active',
      priority: 'low',
      created: new Date('2024-01-03')
    }
  ];

  categories = ['Development', 'Design', 'Quality Assurance', 'Documentation'];

  get totalItems(): number {
    return this.dashboardItems.length;
  }

  get highPriorityCount(): number {
    return this.dashboardItems.filter(item => item.priority === 'high').length;
  }

  getStatusSeverity(status: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
    switch (status) {
      case 'active': return 'success';
      case 'pending': return 'warn';
      case 'inactive': return 'danger';
      default: return 'info';
    }
  }

  getPrioritySeverity(priority: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warn';
      case 'low': return 'info';
      default: return 'info';
    }
  }

  addItem(): void {
    // Implementation for adding new item
    console.log('Add item clicked');
  }

  refreshItems(): void {
    // Implementation for refreshing items
    console.log('Refresh items clicked');
  }
}