import { injectContentFiles } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/card.component';
import PostAttributes from '../../post-attributes';

export const routeMeta: RouteMeta = {
  title: 'Blog Archive',
};

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, CardComponent, DatePipe],
  template: `
    <h1 class="mb-6">Blog Archive</h1>
    <div class="flex flex-wrap justify-around">
      @for (post of posts; track post.attributes.slug) {
        @let attributes = post.attributes;
        <blog-card class="grow shrink basis-1/3 mb-8 h-full">
          <h2 class="m-0 pl-5 underline text-2xl mb-4">{{ attributes.title }}</h2>
          <p class="text-left m-0 mb-4">{{ attributes.description }}</p>
          <div footer class="flex justify-between px-5">
            <p class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {{ attributes.datePublished | date:'MMMM dd, YYYY' }}
            </p>
            <a class="block" [routerLink]="['/blog/', attributes.slug]">Read</a>
          </div>
        </blog-card>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>().sort(({attributes: a }, { attributes: b }) =>
    new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}
