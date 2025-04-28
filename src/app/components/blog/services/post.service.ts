import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Image } from 'src/app/models/image';
import { Post } from 'src/app/models/post';
import { Author } from 'src/app/models/author';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  public httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true,
      observe: 'response' as 'response'
    };
  }

  public urlBuilder(url: string): string {
    return `${environment.api_prefix}${url}`;
  }  public gPost() {
    return this.http.get('assets/blogs/posts.txt', { responseType: 'text' })
      .pipe(
        map(fileContent => {
          const posts = this.parsePostsFromMarkdown(fileContent);
          // Filter to only return published posts
          const publishedPosts = posts.filter(post => post.isPublished);
          // Create a response object that matches the format expected by the application
          return {
            body: publishedPosts
          };
        })
      );
  }
  /**
   * Parse the text file content into Post objects
   * @param fileContent The content of the posts.txt file (pipe-separated)
   * @returns Array of Post objects
   */
  private parsePostsFromMarkdown(fileContent: string): Post[] {
    if (!fileContent) {
      return [];
    }
    
    const posts: Post[] = [];
    const lines = fileContent.split('\n').filter(line => line.trim());
      // Skip header row if it exists
    const startIndex = lines[0].includes('id|author_name|title') ? 1 : 0;
    
    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i];
      // Skip any commented lines
      if (line.trim().startsWith('//')) {
        continue;
      }
      
      const fields = line.split('|');
      
      if (fields.length < 9) {
        console.log('Skipping invalid line:', line);
        continue;
      }
        // Extract post metadata from pipe-separated values based on the format:
      // id|author_name|title|summary|markdown|thumbnail|is_submitted|is_accepted|is_published|created_at|last_updated      let id = parseInt(fields[0].trim(), 10) || i;
      let postId = Number(fields[0].trim());
      let authorName = fields[1].trim();
      let title = fields[2].trim();
      let summary = fields[3].trim();
      let markdownContent = fields[4].trim();
      // remove starting quotes and ending quotes from markdownContent
      if (markdownContent.startsWith('"') && markdownContent.endsWith('"')) {
        markdownContent = markdownContent.slice(1, -1);
      }
      markdownContent = markdownContent.trim();
      let thumbnailPath = fields[5].trim();
      let isSubmitted = fields[6].trim().toLowerCase() === 'true' || fields[6].trim() === '1';
      let isAccepted = fields[7].trim().toLowerCase() === 'true' || fields[7].trim() === '1';
      let isPublished = fields[8].trim().toLowerCase() === 'true' || fields[8].trim() === '1';      let createdAt = fields[9] ? fields[9].trim() : new Date().toISOString();
      let lastUpdate = fields[10] ? fields[10].trim() : new Date().toISOString();
            
      // Create author object
      const author = {
        id: 0,
        name: authorName,
      };      // For debugging
      
      // Create post object
      const post = new Post(title, markdownContent, postId, author);      
      post.isPublished = isPublished;
      post.thumbnail = thumbnailPath;
      post.createdAt = createdAt;
      post.lastUpdate = lastUpdate;
      post.isAccepted = isAccepted;
      post.isSubmitted = isSubmitted;
      
      posts.push(post);
    }
    return posts;
  }

  public getPost(id: number) {
    return this.http.post(
      this.urlBuilder('mpost'), {
      'post': {
        'id': id
      },
      'version': 'V1',
      'mutation': 'GET_EXISTING_POST'
    },
      this.httpOptions());
  }

  public uPost() {
    return this.http.post(
      this.urlBuilder('mpost'), {
      'version': 'V1',
      'mutation': 'GET_FOR_SUBSCRIBER'
    },
      this.httpOptions());
  }

  public savePost(post: Post) {
    return this.http.post(
      this.urlBuilder('mpost'), {
      'version': 'V1',
      'mutation': 'SAVE',
      'post': post
    },
      this.httpOptions());
  }

  public submitPost(post: Post) {
    return this.http.post(
      this.urlBuilder('mpost'), {
      'version': 'V1',
      'mutation': 'SUBMIT',
      'post': post
    },
      this.httpOptions());
  }

  public getPublishedPost(id: number) {
    return this.http.get('assets/blogs/posts.txt', { responseType: 'text' })
      .pipe(
        map(fileContent => {
          const posts = this.parsePostsFromMarkdown(fileContent);
          // Filter to only return published posts
          const publishedPosts = posts.filter(post => post.isPublished);
          // Find the post with the specified ID
          const postWithId = publishedPosts.filter(post => post.id == id);
          // Create a response object that matches the format expected by the application
          return {
            body: postWithId
          };
        })
      );
  }

  public acceptPost(id: number) {
    return this.http.post(
      this.urlBuilder('mpost'), {
      'post': {
        'id': id
      },
      'version': 'V1',
      'mutation': 'ACCEPT'
    },
      this.httpOptions());
  }

  public publishPost(id: number) {
    return this.http.post(
      this.urlBuilder('mpost'), {
      'post': {
        'id': id
      },
      'version': 'V1',
      'mutation': 'PUBLISH'
    },
      this.httpOptions());
  }

  public deletePost(id: number) {
    return this.http.post(
      this.urlBuilder('mpost'), {
      'post': {
        'id': id
      },
      'version': 'V1',
      'mutation': 'DELETE'
    },
      this.httpOptions());
  }

  public saveImage(id: number | undefined, image: Image) {
    return this.http.post(
      this.urlBuilder('mimage'), {
      'post': {
        'id': id
      },
      'version': 'V1',
      'requestType': 'UPLOAD_IMAGE',
      'thumbnail': image
    },
      this.httpOptions());
  }

  public getImage(url: string) {
    return this.http.post(
      this.urlBuilder('mimage'), {
        'version': 'V1',
        'requestType': 'DOWNLOAD_IMAGE',
        's3Path': url
    },
      this.httpOptions());
  }

  public getImageFromUrl(url: string): Observable<string> {
  return this.http.get(url, { responseType: 'blob' }).pipe(
    mergeMap((response: Blob) => {
      return new Observable<string>(observer => {
        const reader = new FileReader();
        reader.readAsDataURL(response);

        reader.onloadend = () => {
          observer.next(reader.result as string); // This is the full data URL: "data:image/jpeg;base64,..."
          observer.complete();
        };

        reader.onerror = (error) => {
          observer.error(error);
        };
      });
    })
  );
}

  
}
