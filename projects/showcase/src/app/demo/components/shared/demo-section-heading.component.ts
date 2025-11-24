import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'kit-demo-section-heading',
  standalone: true,
  imports: [CommonModule, DividerModule],
  template: `
    <p-divider align="right" class="mb-6">
      <div class="inline-flex items-center">
        <span class="font-semibold text-sm uppercase text-text-secondary">{{ label }}</span>
      </div>
    </p-divider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoSectionHeadingComponent {
  @Input() label = '';
}

