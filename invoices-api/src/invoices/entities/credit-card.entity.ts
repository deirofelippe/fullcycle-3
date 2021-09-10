import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from 'uuid';

@Entity({ name: 'credit_cards' })
export class CreditCard {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;

   @Column()
   number: string;

   @CreateDateColumn({ type: 'timestamp' })
   created_at: Date;

   @BeforeInsert()
   generatedId() {
      if (this.id) return
      this.id = v4()
   }
}