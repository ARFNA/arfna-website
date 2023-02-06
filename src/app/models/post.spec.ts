import { Author } from './author';
import { Post } from './post';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post('', '', 0, new Author())).toBeTruthy();
  });
});
