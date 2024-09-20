import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SocialMedia } from '../types/social-media.type';

@Component({
  selector: 'blog-social-media',
  standalone: true,
  template: `
    @let info = information();
    @let ariaDescription = info.ariaDescribedBy || info.text;
    <a [href]="info.href" target="_blank" [ariaDescription]="ariaDescription">
      <span class="mr-2">{{ info.text }}</span>  
      <ng-content />
      <img [src]="assetFullPath()" [ariaDescription]="ariaDescription" />
    </a>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaComponent {  
  information = input.required<SocialMedia>();
  assetFullPath = computed(() => {
    const filename = this.information().filename || 'github.svg';
    return `/images/${filename}`;
  })
}
