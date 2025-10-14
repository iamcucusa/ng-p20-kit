import { Component, TemplateRef, ViewChild } from '@angular/core';
import { PageHeadingComponent } from '@core/page-heading.component';

@Component({
  selector: 'pg-trials-container',
  templateUrl: './trials-container.component.html',
  styleUrls: ['./trials-container.component.scss'],
  standalone: true,
  imports: [PageHeadingComponent]
})
export class TrialsContainerComponent {
  @ViewChild('pageTitleTemplate') pageTitleTemplate!: TemplateRef<any>;
  @ViewChild('pageDescriptionTemplate') pageDescriptionTemplate!: TemplateRef<any>;
  @ViewChild('pageActionsTemplate') pageActionsTemplate!: TemplateRef<any>;

  constructor() { }
}
