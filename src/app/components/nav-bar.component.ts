import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'blog-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="h-full">
      <ul class="h-full flex items-center justify-around">
        @for (link of links; track link.url) {
          <li class="text-[1rem]">
            @if (link.useRouterLink) {
              <a [routerLink]="link.url" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">{{ link.text }}</a>
            } @else {
              <a [href]="link.url" target="_blank">{{ link.text }}</a>
            }
          </li>
        }
        <li>&nbsp;</li>
      </ul>
    </nav>
  `,
  styles: `
    .active {
      color: darkgray;
      font-weight: 700;
      text-decoration: underline;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  links = [
    {
      url: '/home',
      useRouterLink: true,
      text: 'Home'
    },
    {
      url: '/blog',
      useRouterLink: true,
      text: 'Blog'
    },
    {
      url: '/api/rss.xml',
      useRouterLink: false,
      text: 'RSS Feed'
    }
  ];
}
