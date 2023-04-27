import {
  AfterInsert,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  email: string;

  @AfterInsert()
  logAfterInsert() {
    console.log(this.id, 'inserted');
  }

  @AfterUpdate()
  logAfterUpdate() {
    console.log(this.id, 'inserted');
  }
}
