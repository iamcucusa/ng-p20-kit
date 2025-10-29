import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Test component to verify PrimeFlex-compatible spacing values
 * This component demonstrates that the custom Tailwind spacing
 * configuration matches PrimeFlex values exactly.
 */
@Component({
  selector: 'kit-spacing-test-example',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spacing-test-container w-full">
      <h2 class="text-2xl font-bold mb-4">Spacing Test - PrimeFlex Compatible Values</h2>
      
      <!-- Padding Tests -->
      <div class="test-section">
        <h3 class="text-lg font-semibold mb-2">Padding Tests</h3>
        
        <div class="test-item">
          <span class="label">p-3 (should be 16px):</span>
          <div class="p-3 bg-blue-100 border border-blue-300 inline-block">
            <div class="w-4 h-4 bg-blue-500"></div>
          </div>
        </div>
        
        <div class="test-item">
          <span class="label">px-4 (should be 24px horizontal):</span>
          <div class="px-4 bg-green-100 border border-green-300 inline-block">
            <div class="w-4 h-4 bg-green-500"></div>
          </div>
        </div>
        
        <div class="test-item">
          <span class="label">py-5 (should be 32px vertical):</span>
          <div class="py-5 bg-purple-100 border border-purple-300 inline-block">
            <div class="w-4 h-4 bg-purple-500"></div>
          </div>
        </div>
      </div>
      
      <!-- Margin Tests -->
      <div class="test-section">
        <h3 class="text-lg font-semibold mb-2">Margin Tests</h3>
        
        <div class="test-item">
          <span class="label">m-3 (should be 16px):</span>
          <div class="m-3 bg-red-100 border border-red-300 inline-block">
            <div class="w-4 h-4 bg-red-500"></div>
          </div>
        </div>
        
        <div class="test-item">
          <span class="label">mx-4 (should be 24px horizontal):</span>
          <div class="mx-4 bg-yellow-100 border border-yellow-300 inline-block">
            <div class="w-4 h-4 bg-yellow-500"></div>
          </div>
        </div>
      </div>
      
      <!-- Responsive Tests -->
      <div class="test-section">
        <h3 class="text-lg font-semibold mb-2">Responsive Tests</h3>
        
        <div class="test-item">
          <span class="label">p-3 md:p-4 lg:p-5:</span>
          <div class="p-3 md:p-4 lg:p-5 bg-indigo-100 border border-indigo-300 inline-block">
            <div class="w-4 h-4 bg-indigo-500"></div>
          </div>
        </div>
      </div>
      
      <!-- Expected Values Reference -->
      <div class="test-section">
        <h3 class="text-lg font-semibold mb-2">Expected Values (PrimeFlex Compatible)</h3>
        <div class="values-reference">
          <div class="value-item">p-3 = 16px (1rem)</div>
          <div class="value-item">p-4 = 24px (1.5rem)</div>
          <div class="value-item">p-5 = 32px (2rem)</div>
          <div class="value-item">p-6 = 48px (3rem)</div>
          <div class="value-item">p-7 = 64px (4rem)</div>
          <div class="value-item">p-8 = 80px (5rem)</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .spacing-test-container {
      padding: 1rem;
      width: 100%;
    }
    
    .test-section {
      margin-bottom: 2rem;
      padding: 1rem;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background: #f9fafb;
    }
    
    .test-item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      gap: 1rem;
    }
    
    .label {
      font-weight: 500;
      min-width: 200px;
      font-family: monospace;
      font-size: 0.9rem;
    }
    
    .values-reference {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0.5rem;
    }
    
    .value-item {
      padding: 0.5rem;
      background: #f3f4f6;
      border-radius: 4px;
      font-family: monospace;
      font-size: 0.9rem;
    }
  `]
})
export class SpacingTestExampleComponent {
  // This component is purely for testing spacing values
  // It can be imported and used in any route to verify spacing
}
