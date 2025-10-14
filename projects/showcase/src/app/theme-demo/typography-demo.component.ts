import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kit-typography-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="typography-demo w-full">
      <!-- Font Sizes Demo -->
      <div class="demo-section">
        <h3 class="demo-section-title">Font Sizes</h3>
        <div class="demo-grid w-full">
          <div class="demo-item">
            <div class="demo-label">text-xs</div>
            <div class="text-xs">Extra small text (12px)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-sm</div>
            <div class="text-sm">Small text (14px)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-base</div>
            <div class="text-base">Base text (16px)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-lg</div>
            <div class="text-lg">Large text (18px)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-xl</div>
            <div class="text-xl">Extra large text (20px)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-2xl</div>
            <div class="text-2xl">2X large text (24px)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-3xl</div>
            <div class="text-3xl">3X large text (30px)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-4xl</div>
            <div class="text-4xl">4X large text (36px)</div>
          </div>
        </div>
      </div>

      <!-- Font Weights Demo -->
      <div class="demo-section">
        <h3 class="demo-section-title">Font Weights</h3>
        <div class="demo-grid w-full">
          <div class="demo-item">
            <div class="demo-label">font-thin</div>
            <div class="font-thin">Thin weight (100)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">font-light</div>
            <div class="font-light">Light weight (300)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">font-normal</div>
            <div class="font-normal">Normal weight (400)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">font-medium</div>
            <div class="font-medium">Medium weight (500)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">font-semibold</div>
            <div class="font-semibold">Semibold weight (600)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">font-bold</div>
            <div class="font-bold">Bold weight (700)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">font-extrabold</div>
            <div class="font-extrabold">Extra bold weight (800)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">font-black</div>
            <div class="font-black">Black weight (900)</div>
          </div>
        </div>
      </div>

      <!-- Line Heights Demo -->
      <div class="demo-section">
        <h3 class="demo-section-title">Line Heights</h3>
        <div class="demo-grid w-full">
          <div class="demo-item">
            <div class="demo-label">leading-none</div>
            <div class="leading-none bg-gray-100 p-2">Tight line spacing (1.0)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">leading-tight</div>
            <div class="leading-tight bg-gray-100 p-2">Tight line spacing (1.25)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">leading-snug</div>
            <div class="leading-snug bg-gray-100 p-2">Snug line spacing (1.375)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">leading-normal</div>
            <div class="leading-normal bg-gray-100 p-2">Normal line spacing (1.5)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">leading-relaxed</div>
            <div class="leading-relaxed bg-gray-100 p-2">Relaxed line spacing (1.625)</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">leading-loose</div>
            <div class="leading-loose bg-gray-100 p-2">Loose line spacing (2.0)</div>
          </div>
        </div>
      </div>

      <!-- Text Alignment Demo -->
      <div class="demo-section">
        <h3 class="demo-section-title">Text Alignment</h3>
        <div class="demo-grid w-full">
          <div class="demo-item">
            <div class="demo-label">text-left</div>
            <div class="text-left bg-gray-100 p-2">Left aligned text</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-center</div>
            <div class="text-center bg-gray-100 p-2">Center aligned text</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-right</div>
            <div class="text-right bg-gray-100 p-2">Right aligned text</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-justify</div>
            <div class="text-justify bg-gray-100 p-2">Justified text that spreads across the full width of the container</div>
          </div>
        </div>
      </div>

      <!-- Text Transformation Demo -->
      <div class="demo-section">
        <h3 class="demo-section-title">Text Transformation</h3>
        <div class="demo-grid w-full">
          <div class="demo-item">
            <div class="demo-label">lowercase</div>
            <div class="lowercase">LOWERCASE TEXT</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">uppercase</div>
            <div class="uppercase">uppercase text</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">capitalize</div>
            <div class="capitalize">capitalize each word</div>
          </div>
        </div>
      </div>

      <!-- Responsive Typography Demo -->
      <div class="demo-section">
        <h3 class="demo-section-title">Responsive Typography</h3>
        <div class="demo-grid w-full">
          <div class="demo-item">
            <div class="demo-label">text-2xl md:text-3xl lg:text-4xl</div>
            <div class="text-2xl md:text-3xl lg:text-4xl font-bold">Responsive Heading</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">text-sm md:text-base lg:text-lg</div>
            <div class="text-sm md:text-base lg:text-lg leading-relaxed">Responsive paragraph text</div>
          </div>
        </div>
      </div>

      <!-- Typography Combinations Demo -->
      <div class="demo-section">
        <h3 class="demo-section-title">Typography Combinations</h3>
        <div class="demo-grid w-full">
          <div class="demo-item">
            <div class="demo-label">Heading Style</div>
            <div class="text-3xl font-bold leading-tight text-gray-900">Main Heading</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">Subheading Style</div>
            <div class="text-xl font-semibold leading-snug text-gray-700">Subheading</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">Body Text Style</div>
            <div class="text-base font-normal leading-relaxed text-gray-600">Body text with optimal readability</div>
          </div>
          <div class="demo-item">
            <div class="demo-label">Caption Style</div>
            <div class="text-sm font-medium leading-normal text-gray-500">Small caption text</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .typography-demo {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .demo-section {
      padding: 1.5rem;
      background: var(--p-surface-card);
      border-radius: 8px;
      border: 1px solid var(--p-surface-border);
    }

    .demo-section-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--p-text-color);
      margin: 0 0 1.5rem 0;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--p-primary-color);
    }

    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
      width: 100%;
    }

    .demo-item {
      padding: 1rem;
      background: var(--p-surface-section);
      border-radius: 6px;
      border: 1px solid var(--p-surface-border);
    }

    .demo-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--p-primary-color);
      margin-bottom: 0.5rem;
      font-family: 'Courier New', monospace;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .demo-item > div:last-child {
      color: var(--p-text-color);
      word-break: break-word;
    }

    @media (max-width: 768px) {
      .demo-grid {
        grid-template-columns: 1fr;
      }
      
      .demo-section {
        padding: 1rem;
      }
    }
  `]
})
export class TypographyDemoComponent {
  // Component for showcasing typography utilities
}
