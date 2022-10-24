import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { BlogEntity } from '../models/blog.entity';
import { BlogPost } from '../models/blog.interface';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly blogRepository: Repository<BlogEntity>,
  ) {}

  createBlog(blog: BlogPost): Observable<BlogPost> {
    return from(this.blogRepository.save(blog));
  }
}
