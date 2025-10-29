import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

export interface DemoNavigationItem {
  id: string;
  title: string;
  category: string;
  disabled?: boolean;
}

@Component({
  selector: 'kit-demo-navigation',
  standalone: true,
  imports: [CommonModule, RippleModule],
  template: `
    <div class="pg-demo-navigation-container">
      <ul class="pg-demo-navigation-list">
        @for (category of categories; track category.name) {
          <li class="pg-demo-category-section">
            <a
              pRipple
              class="pg-demo-category-header"
              (click)="toggleCategory(category.name)"
            >
              <span class="font-medium">{{ category.name }}</span>
              <i class="pi ml-auto mr-1" [class.pi-chevron-down]="category.expanded" [class.pi-chevron-right]="!category.expanded"></i>
            </a>
            <ul class="pg-demo-category-list" [class.hidden]="!category.expanded">
              @for (item of getItemsForCategory(category.name); track item.id) {
                <li class="pg-demo-category-item">
                  <a
                    pRipple
                    [class.active]="activeItem === item.id"
                    [class.disabled]="item.disabled"
                    (click)="scrollToItem(item.id)"
                    class="pg-demo-nav-link"
                  >
                    <span class="font-medium">{{ item.title }}</span>
                  </a>
                </li>
              }
            </ul>
          </li>
        }
      </ul>
    </div>
  `,
  styleUrls: ['./demo-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoNavigationComponent {
  activeItem: string | null = null;

  categories = [
    { name: 'Layout', expanded: true },
    { name: 'Containers', expanded: true },
    { name: 'Input Data Elements', expanded: true }
  ];

  navigationItems: DemoNavigationItem[] = [
    { id: 'trial-heading', title: 'Trial Heading', category: 'Layout' },
    { id: 'status-display', title: 'Status Display', category: 'Layout' },
    { id: 'card-system', title: 'Card System', category: 'Containers' },
    { id: 'country-select', title: 'Country Select', category: 'Input Data Elements' },
    { id: 'assumptions-field', title: 'Assumptions Field', category: 'Input Data Elements' }
  ];

  /**
   * Toggle category section visibility
   */
  toggleCategory(categoryName: string): void {
    const category = this.categories.find(c => c.name === categoryName);
    if (category) {
      category.expanded = !category.expanded;
    }
  }

  /**
   * Get items for a specific category
   */
  getItemsForCategory(categoryName: string): DemoNavigationItem[] {
    return this.navigationItems.filter(item => item.category === categoryName);
  }

  /**
   * Scroll to the specified item with smooth scrolling
   */
  scrollToItem(itemId: string): void {
    const element = document.getElementById(itemId);
    if (element) {
      // Update active item
      this.activeItem = itemId;
      
      // Scroll to element with smooth behavior
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });

      // Update active item based on scroll position after a delay
      setTimeout(() => {
        this.updateActiveItem();
      }, 100);
    }
  }

  /**
   * Update active item based on scroll position
   */
  private updateActiveItem(): void {
    const sections = this.navigationItems.map(item => ({
      id: item.id,
      element: document.getElementById(item.id)
    })).filter(section => section.element);

    if (sections.length === 0) return;

    // Find the section that's currently in view
    const scrollPosition = window.scrollY + 100; // Offset for better UX
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.element && section.element.offsetTop <= scrollPosition) {
        this.activeItem = section.id;
        break;
      }
    }
  }

  /**
   * Initialize scroll listener for active item tracking
   */
  ngOnInit(): void {
    // Set up scroll listener to update active item
    window.addEventListener('scroll', () => {
      this.updateActiveItem();
    });

    // Set initial active item
    this.updateActiveItem();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => {
      this.updateActiveItem();
    });
  }
}
