import { Component } from '@angular/core';
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
            <a [routerLink]="link.url" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">{{ link.text }}</a>
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
})
export class NavBarComponent {
  links = [
    {
      url: '/home',
      text: 'Home'
    },
    {
      url: '/blog',
      text: 'Blog'
    }
  ];
}
