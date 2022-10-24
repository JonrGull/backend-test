import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog.interface';
import { BlogService } from '../services/blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  create(@Body() blog: BlogPost): Observable<BlogPost> {
    return this.blogService.createBlog(blog);
  }
}
