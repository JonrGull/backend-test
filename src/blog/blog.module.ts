import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './controllers/blog.controller';
import { BlogEntity } from './models/blog.entity';
import { BlogService } from './services/blog.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity])],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
