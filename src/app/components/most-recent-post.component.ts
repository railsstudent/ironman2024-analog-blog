import { injectContentFiles } from '@analogjs/content';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'blog-most-recent-post',
  standalone: true,
  imports: [],
  template: `
    <h3>Latest Posts</h3>
    <div>
      @for (post of mostRecentTwoPosts; track post.attributes.slug) {
        <p>{{ post.attributes.datePublished  }}</p>
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
