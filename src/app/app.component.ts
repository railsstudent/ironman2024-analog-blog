import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: `
    <blog-nav-bar />
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
        
        display: grid;
        grid-template-rows: 60px 1fr 250px;
      
      }
    `,
  ],
})
export class AppComponent {}
