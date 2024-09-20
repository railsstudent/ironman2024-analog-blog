import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar.component';
import { NavFooterComponent } from './components/nav-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, NavFooterComponent],
  template: `
    <blog-nav-bar class="navbar" />
    <div class="main">
      <router-outlet></router-outlet>
    </div>
    <blog-nav-footer class="nav-footer" />
  `,
  styles: `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
        
        display: grid;
        grid-template-rows: 60px 1fr 200px;
        grid-template-columns: 1fr;
        grid-template-areas: "header"
                             "body"
                             "footer"
      }

      .navbar {
        grid-area: header;
      }

      .main, router-outlet + *  {
        grid-area: body;
      }

      .nav-footer {
        grid-area: footer;
      }
    `,
})
export class AppComponent {}
