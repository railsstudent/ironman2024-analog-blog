import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SocialMediaService } from '../services/social-media.service';
import { SocialMedia } from '../types/social-media.type';
import { GithubIconComponent, LinkedinIconComponent, TwitterXIconComponent } from './icons.component';
import { SocialMediaComponent } from './social-media.component';

@Component({
  selector: 'blog-nav-footer',
  standalone: true,
  imports: [SocialMediaComponent, GithubIconComponent, LinkedinIconComponent, TwitterXIconComponent, NgComponentOutlet],
  template: `
    <footer class="p-2 h-full flex flex-col justify-center">
      <div class="flex justify-between">
        <div>
          <p>Copyright &#64; {{ year }} - All right reserved.</p>
        </div>
        <div class="flex flex-row basis-1/4">
          @for (key of keys(); track key) {
            <blog-social-media [information]="socialMedia()[key]" class="grow shrink basic-1/3">
              <ng-container *ngComponentOutlet="components()[key]" />
            </blog-social-media>
          }
        </div>
      </div>
      <div>
        <p>Powered by <a href="https://analogjs.org/" target="_blank">AnalogJS</a></p>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavFooterComponent {
  socialMediaService = inject(SocialMediaService);

  year = new Date().getFullYear();
  socialMedia = toSignal(this.socialMediaService.getProfiles(), { initialValue: {} as { [key: string]: SocialMedia } });

  keys = computed(() => Object.keys(this.socialMedia()));
  components = computed(() => ({
      github: GithubIconComponent,
      twitter: TwitterXIconComponent,
      linkedin: LinkedinIconComponent
    } as { [key: string] : any }));
}
