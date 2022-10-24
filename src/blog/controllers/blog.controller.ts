import { Controller, Post } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  @Post()
  create() {
    
  }
}
