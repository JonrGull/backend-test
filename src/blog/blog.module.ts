import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './controllers/blog.controller';
import { FeedBlogEntity } from './models/blog.entity';
import { BlogService } from './services/blog.service';

@Module({
  imports: [TypeOrmModule.forFeature([FeedBlogEntity])],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
