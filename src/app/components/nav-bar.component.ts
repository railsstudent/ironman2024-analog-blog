import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'blog-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <ul class="navbar">
        @for (link of links; track link.url) {
          <li>
            <a [routerLink]="link.url" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">{{ link.text }}</a>
          </li>
        }
        <li>&nbsp;</li>
      </ul>
    </nav>
  `,
  styles: `
    ul {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    ul > li {
      font-size: 1rem;
    }

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
