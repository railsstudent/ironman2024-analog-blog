import { injectContentFiles } from '@analogjs/content';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'blog-most-recent-post',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-left underline">Latest Posts</h2>
    <div class="text-left">
      @for (post of mostRecentTwoPosts; track post.attributes.slug) {
        @let attributes = post.attributes;
        <p>{{ attributes.title }}</p>
        <p>{{ attributes.description }}</p>
        <p>{{ attributes.datePublished  }}</p>
        <button>Read</button>
      }
    </div>
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MostRecentPostComponent {
  readonly mostRecentTwoPosts = injectContentFiles<PostAttributes>().sort(({attributes: a }, { attributes: b }) =>
    new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  ).slice(0, 2);
}
