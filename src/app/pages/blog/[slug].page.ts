import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

import PostAttributes from '../../post-attributes';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const routeMeta: RouteMeta = {
  title: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const urlParts = state.url.split('/');
    const lastPathParts = urlParts[urlParts.length - 1].split('-');
    return new TitleCasePipe().transform(lastPathParts.splice(3).join(' '));
  }
}

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
    <article>
      <img class="post__image" [src]="post.attributes.coverImage" />
      <analog-markdown [content]="post.content" />
    </article>
    }
  `,
  styles: [
    `
      .post__image {
        max-height: 40vh;
      }
    `,
  ],
})
export default class BlogPostComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
