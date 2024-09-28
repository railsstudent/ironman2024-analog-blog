import { RouteMeta } from '@analogjs/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
        <p>When I am not working, I love to exercise, learn foreign languages, and create content to show the new features and best practices of the <span class="framework underline italic">Angular</span> framework.</p>
    </section>
    <section class="grid grid-cols-3 rows-auto-rows gap-4">
        @for (content of cardContents; track $index) {
            <blog-card class="grid grid-rows-subgrid row-span-1">
                <p header class="text-xl underline">{{ content.title }}<p>
                <ul class="text-left list-disc p-5">
                    @for (item of content.items; track item) {
                        <li>{{ item }}</li>
                    }
                </ul>
            </blog-card>
        }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
    cardContents = [
        {
            title: 'Current Technical Stack',
            items: [
                "Angular",
                "Vue (Composition API)",
                "NestJS",
                "JavaScript",
                "HTMX",
                "PostgreSQL"
            ]
        },
        {
            title: "Areas of Interest",
            items: [
                "Angular Architecture",
                "REST API",
                "GraphQL",
                "Generative AI",
            ]
        },
        {
            title: "Hobbies",
            items: [
                "Learn Foreign Languages",
                "Learn Tech",
                "Exercise",
                "Blogging",
                "Watch Wrestling and make podcasts",
                "Travelling"
            ]
        }
    ]
}
