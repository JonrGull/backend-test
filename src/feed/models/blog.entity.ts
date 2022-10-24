import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feed_blog')
export class FeedBlogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  content: string;

  @Column({ default: '' })
  img: string;
}
