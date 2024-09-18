import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Home</h1>
    <section class="introduction">
        <p>Hello. My name is Connie and I am an Angular GDE from Hong Kong.</p>
        <p>I am a passionate software engineer and content creator who is constantly learning about the latest web technology to level up my skills.</p>
        <p>When I am not working, I love to exercise, learn foreign languages, and create contents to show the new features and best practices of the <span class="framework">Angular</span> framework.</p>
    </section>
    <section class="tech">
        <p>Current Tech Stack<p>
        <ul>
            <li>Angular</li>
            <li>Vue</li>
            <li>NestJS</li>
            <li>HTMX (I love using it when I don't want to use any frontend framework.)</li>
            <li>PostgreSQL</li>
        </ul>
    </section>
  `,
  styles: `
    section.introduction {
        margin-bottom: 1rem;
    }

    section.tech {
        text-align: left;

        li {
            list-style: circle;
            font-size: 1.1rem;
            margin-left: 1.25rem;
        }
    }

    p {
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .framework {
        text-decoration: underline;
        font-style: italic;
    }
  `,
})
export default class HomeComponent {
}
