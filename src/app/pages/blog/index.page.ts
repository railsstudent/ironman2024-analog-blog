import { injectContentFiles } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
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
  imports: [RouterLink, CardComponent],
  template: `
    <h1>Blog Archive</h1>
    @for (post of posts; track post.attributes.slug) {
      @let attributes = post.attributes;
      <blog-card>
        <h2 class="m-0 pl-5 underline text-2xl mb-4">{{ attributes.title }}</h2>
        <p class="text-left m-0 mb-4">{{ attributes.description }}</p>
        <div footer class="flex justify-between px-5">
          <p><span class="text-[#646cff]">Date Published:</span> {{ attributes.datePublished }}</p>
          <a class="block" [routerLink]="['/blog/', attributes.slug]">Read</a>
        </div>
      </blog-card>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
