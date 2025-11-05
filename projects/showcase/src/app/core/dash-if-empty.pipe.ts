import { Pipe, PipeTransform } from '@angular/core';

/**
 * Dash If Empty Pipe
 * 
 * Transforms empty, null, undefined, or invalid values to an em dash (—) for display.
 * Provides a clean, minimal placeholder that's visually distinct but not distracting.
 * 
 * @example
 * ```html
 * {{ value | dashIfEmpty }}
 * ```
 * 
 * @since 1.0.0
 */
@Pipe({
  name: 'dashIfEmpty',
  standalone: true,
})
export class DashIfEmptyPipe implements PipeTransform {
  /**
   * Transforms the value to '—' (em dash) if it's empty, null, undefined, NaN, or an empty object.
   * 
   * @param value - The value to transform
   * @returns The original value if it's valid, or '—' if it's empty
   */
  transform(value: unknown): string | unknown {
    // Handle null, undefined, or empty string
    if (value === undefined || value === null || value === '') {
      return '—';
    }
    
    // Handle NaN (Not a Number)
    if (typeof value === 'number' && isNaN(value)) {
      return '—';
    }
    
    // Handle empty objects
    if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
      return '—';
    }
    
    // Handle empty arrays
    if (Array.isArray(value) && value.length === 0) {
      return '—';
    }
    
    return value;
  }
}
