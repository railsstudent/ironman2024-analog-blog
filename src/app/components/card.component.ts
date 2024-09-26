import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'blog-card',
  standalone: true,
  template: `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ng-content select="[header]" />
      <div class="p-5">
        <ng-content>Default</ng-content>
      </div>
      <div>
        <ng-content select="[footer]" />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
