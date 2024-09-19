import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

export const routeMeta: RouteMeta = {
    title: 'About Connie',
};

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Welcome to my blog!!!</h1>
    <section class="introduction">
        <p>Hello. My name is Connie and I am an Angular GDE from Hong Kong.</p>
        <p>I am a passionate software engineer and content creator who is constantly learning about the latest web technology to level up my skills.</p>
        <p>When I am not working, I love to exercise, learn foreign languages, and create content    to show the new features and best practices of the <span class="framework">Angular</span> framework.</p>
    </section>
    <section class="tech">
        <p>Current Technical Stack<p>
        <ul>
            <li>Angular</li>
            <li>Vue (Composition API)</li>
            <li>NestJS</li>
            <li>HTMX</li>
            <li>PostgreSQL</li>
        </ul>
    </section>
    <section>
        <p>Areas of Interest</p>
        <ul>
            <li>Angular Architecture</li>
            <li>Rest API</li>
            <li>Generative AI</li>
        </ul>
    </section>
  `,
  styles: `
    section {
        margin-bottom: 1rem;
    }

    section.tech, section.interest {
        text-align: center;

        li {
            list-style: none;
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
export default class HomeComponent {}
