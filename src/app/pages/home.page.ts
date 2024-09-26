import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { CardComponent } from '../components/card.component';

export const routeMeta: RouteMeta = {
    title: 'About Connie',
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h1>Welcome to my blog!!!</h1>
    <section class="introduction mb-4">
        <p>Hello. My name is Connie and I am an Angular GDE from Hong Kong.</p>
        <p>I am a passionate software engineer and content creator who is constantly learning about the latest web technology to level up my skills.</p>
        <p>When I am not working, I love to exercise, learn foreign languages, and create content    to show the new features and best practices of the <span class="framework underline italic">Angular</span> framework.</p>
    </section>
    <section class="flex justify-evenly">
        <blog-card>
            <p header class="text-xl underline">Current Technical Stack<p>
            <ul class="text-left list-disc p-5">
                <li>Angular</li>
                <li>Vue (Composition API)</li>
                <li>NestJS</li>
                <li>JavaScript</li>
                <li>HTMX</li>
                <li>PostgreSQL</li>
            </ul>
        </blog-card>
        <blog-card>
            <p header class="text-xl underline">Areas of Interest<p>
            <ul class="text-left list-disc p-5">
                <li>Angular Architecture</li>
                <li>REST API</li>
                <li>Generative AI</li>
            </ul>
        </blog-card>
        <blog-card>
            <p header class="text-xl underline">Hobbies<p>
            <ul class="text-left list-disc p-5">
                <li>Learn Foreign Language</li>
                <li>Learn Tech</li>
                <li>Exercise</li>
            </ul>
        </blog-card>
    </section>
  `,
})
export default class HomeComponent {}
