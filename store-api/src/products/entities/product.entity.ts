import slugify from "slugify";
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from 'uuid';

@Entity({ name: 'products' })
export class Product {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;

   @Column()
   description: string;

   @Column()
   price: number;

   @Column()
   image_url: string;

   @Column()
   slug: string;

   @CreateDateColumn({ type: 'timestamp' })
   created_at: string;

   @BeforeInsert()
   generateId() {
      if (this.id) return;
      this.id = v4()
   }

   @BeforeInsert()
   generateSlug() {
      if (this.slug) return;
      this.slug = slugify(this.name)
   }
}