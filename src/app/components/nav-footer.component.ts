import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SocialMediaComponent } from './social-media.component';
import { SocialMedia } from '../types/social-media.type';
import { GithubIconComponent, LinkedinIconComponent, TwitterXIconComponent } from './icons/github-icon.component';

@Component({
  selector: 'blog-nav-footer',
  standalone: true,
  imports: [SocialMediaComponent, GithubIconComponent, LinkedinIconComponent, TwitterXIconComponent],
  template: `
    <footer class="p-2 h-full flex flex-col justify-center">
      <div class="flex justify-between">
        <div>
          <p>Copyright &#64; {{ year() }} - All right reserved.</p>
        </div>
        <div class="flex flex-row basis-1/4">
          <blog-social-media [information]="github()" class="grow shrink basic-1/3">
            <blog-github-icon />
          </blog-social-media>
          <blog-social-media [information]="twitter()" class="grow shrink basic-1/3">  
            <blog-twitter-x-icon />
          </blog-social-media>
          <blog-social-media [information]="linkedin()" class="grow shrink basic-1/3">  
            <blog-linkedin-icon />
          </blog-social-media>          
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

  github = signal<SocialMedia>({
    href: 'https://github.com/railsstudent',
    text: 'Github',
  });

  twitter = signal<SocialMedia>({
    href: 'https://x.com/connieleung404',
    text: 'X',
    ariaDescribedBy: 'X',
  });

  linkedin = signal<SocialMedia>({
    href: 'https://www.linkedin.com/in/connieleung107/',
    text: 'Linkedin',
  });
}
