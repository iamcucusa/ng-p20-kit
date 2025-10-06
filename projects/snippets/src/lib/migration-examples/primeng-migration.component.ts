import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * PrimeNG Migration Example: DataTable Component
 * 
 * This component demonstrates how to migrate PrimeNG components from Angular 17 to 20,
 * focusing on standalone components and proper imports.
 * 
 * @example
 * ```typescript
 * // Before (Angular 17) - In a module
 * @NgModule({
 *   declarations: [DataTableComponent],
 *   imports: [TableModule, CommonModule]
 * })
 * export class DataTableModule {}
 * 
 * // After (Angular 20) - Standalone component
 * @Component({
 *   selector: 'app-data-table',
 *   standalone: true,
 *   imports: [TableModule, CommonModule],
 *   template: `
 *     <p-table [value]="products" [paginator]="true" [rows]="10">
 *       <ng-template pTemplate="header">
 *         <tr>
 *           <th>Name</th>
 *           <th>Price</th>
 *           <th>Category</th>
 *         </tr>
 *       </ng-template>
 *       <ng-template pTemplate="body" let-product>
 *         <tr>
 *           <td>{{ product.name }}</td>
 *           <td>{{ product.price | currency }}</td>
 *           <td>{{ product.category }}</td>
 *         </tr>
 *       </ng-template>
 *     </p-table>
 *   `
 * })
 * export class DataTableComponent {
 *   products = [
 *     { name: 'Product 1', price: 100, category: 'Electronics' },
 *     { name: 'Product 2', price: 200, category: 'Clothing' }
 *   ];
 * }
 * ```
 */
@Component({
  selector: 'app-primeng-migration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="migration-example">
      <h3>PrimeNG Migration Example</h3>
      <p>This demonstrates the key changes for PrimeNG components in Angular 20:</p>
      
      <div class="code-block">
        <h4>Key Changes:</h4>
        <ul>
          <li><strong>Standalone Components:</strong> Add <code>standalone: true</code></li>
          <li><strong>Direct Imports:</strong> Import PrimeNG modules directly in component</li>
          <li><strong>No Modules:</strong> Remove NgModule declarations</li>
          <li><strong>Modern Injection:</strong> Use <code>inject()</code> function</li>
        </ul>
      </div>
      
      <div class="migration-steps">
        <h4>Migration Steps:</h4>
        <ol>
          <li>Add <code>standalone: true</code> to component decorator</li>
          <li>Add <code>imports: [PrimeNGModule, CommonModule]</code> array</li>
          <li>Remove component from NgModule declarations</li>
          <li>Update service injection to use <code>inject()</code></li>
          <li>Update routing to use standalone components</li>
        </ol>
      </div>
    </div>
  `,
  styles: [`
    .migration-example {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #f9f9f9;
    }
    
    .code-block {
      background: #f4f4f4;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
    }
    
    .migration-steps {
      background: #e8f4fd;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
    }
    
    code {
      background: #f0f0f0;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    
    ul, ol {
      margin: 10px 0;
    }
    
    li {
      margin: 5px 0;
    }
  `]
})
export class PrimeNGMigrationComponent {
  /** Example data for demonstration */
  @Input() data: any[] = [
    { name: 'Product 1', price: 100, category: 'Electronics' },
    { name: 'Product 2', price: 200, category: 'Clothing' }
  ];
  
  /** Event emitted when data changes */
  @Output() dataChange = new EventEmitter<any[]>();
}
