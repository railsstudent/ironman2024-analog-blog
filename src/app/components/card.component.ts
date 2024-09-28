import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'blog-card',
  standalone: true,
  template: `
    <div class="badge grid grid-rows-[auto_minmax(0,_1fr)_auto] row-span-3">
      <div class="pt-2">
        <ng-content select="[header]" />
      </div>
      <div class="p-5">
        <ng-content>Default</ng-content>
      </div>
      <div class="pb-2">
        <ng-content select="[footer]" />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .badge {
      @apply max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700;
    }
  `,
})
export class CardComponent {}
