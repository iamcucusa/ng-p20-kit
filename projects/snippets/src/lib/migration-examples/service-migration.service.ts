import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service Migration Example: Angular 17 to 20
 * 
 * This service demonstrates the migration patterns for services,
 * focusing on the new inject() function and modern dependency injection.
 * 
 * @example
 * ```typescript
 * // Before (Angular 17) - Constructor injection
 * @Injectable({
 *   providedIn: 'root'
 * })
 * export class DataService {
 *   constructor(private http: HttpClient) {}
 *   
 *   getData(): Observable<any[]> {
 *     return this.http.get<any[]>('/api/data');
 *   }
 * }
 * 
 * // After (Angular 20) - Modern injection
 * @Injectable({
 *   providedIn: 'root'
 * })
 * export class DataService {
 *   private http = inject(HttpClient);
 *   
 *   getData(): Observable<any[]> {
 *     return this.http.get<any[]>('/api/data');
 *   }
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class ServiceMigrationService {
  private http = inject(HttpClient);
  
  /**
   * Fetches data from the API
   * @returns Observable of data array
   */
  getData(): Observable<any[]> {
    return this.http.get<any[]>('/api/data');
  }
  
  /**
   * Posts data to the API
   * @param data The data to post
   * @returns Observable of the response
   */
  postData(data: any): Observable<any> {
    return this.http.post<any>('/api/data', data);
  }
  
  /**
   * Updates existing data
   * @param id The ID of the item to update
   * @param data The updated data
   * @returns Observable of the response
   */
  updateData(id: string, data: any): Observable<any> {
    return this.http.put<any>(`/api/data/${id}`, data);
  }
  
  /**
   * Deletes data by ID
   * @param id The ID of the item to delete
   * @returns Observable of the response
   */
  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`/api/data/${id}`);
  }
}
