import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SocialMedia } from '../types/social-media.type';
import { GithubIconComponent, LinkedinIconComponent, TwitterXIconComponent } from './icons/github-icon.component';
import { SocialMediaComponent } from './social-media.component';

@Component({
  selector: 'blog-nav-footer',
  standalone: true,
  imports: [SocialMediaComponent, GithubIconComponent, LinkedinIconComponent, TwitterXIconComponent, NgComponentOutlet],
  template: `
    <footer class="p-2 h-full flex flex-col justify-center">
      <div class="flex justify-between">
        <div>
          <p>Copyright &#64; {{ year() }} - All right reserved.</p>
        </div>
        @let sm = socialMedia();
        <div class="flex flex-row basis-1/4">
          @for (key of keys(); track key) {
            <blog-social-media [information]="sm[key]" class="grow shrink basic-1/3">
              <ng-container *ngComponentOutlet="getComponentByKey(key)" />
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
  year = signal(new Date().getFullYear());

  socialMedia = signal<{ [key: string]: SocialMedia }>({
    github: {
      href: 'https://github.com/railsstudent',
      text: 'Github',
    },
    twitter: {
      href: 'https://x.com/connieleung404',
      text: 'Twitter',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/connieleung107/',
      text: 'Linkedin',
    }
  });

  keys = computed(() => Object.keys(this.socialMedia()));

  getComponentByKey(key: string) {
    switch (key) {
      case 'github':
        return GithubIconComponent
      case 'twitter':
        return TwitterXIconComponent;
      default:
        return LinkedinIconComponent;
    }
  }
}
