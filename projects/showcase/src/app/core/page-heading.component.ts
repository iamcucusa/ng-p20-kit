import { Component, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kit-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PageHeadingComponent {
  @ContentChild('pageTitle') pageTitle!: TemplateRef<unknown>;
  @ContentChild('pageDescription') pageDescription?: TemplateRef<unknown>;
  @ContentChild('pageActions') pageActions?: TemplateRef<unknown>;
}
